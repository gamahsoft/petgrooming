'use server'

import { getPayloadClient } from '@/lib/payload'
import { hasUsableDatabaseUri } from '@/lib/env'

type InquiryState = {
  message: string
  ok: boolean
}

type TurnstileResponse = {
  success: boolean
  'error-codes'?: string[]
}

function getValue(formData: FormData, key: string) {
  return String(formData.get(key) || '').trim()
}

async function verifyTurnstile(token: string) {
  const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY

  if (!secret) {
    return true
  }

  if (!token) {
    return false
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  })

  if (!response.ok) {
    return false
  }

  const result = (await response.json()) as TurnstileResponse
  return result.success
}

export async function submitInquiry(
  _previousState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = getValue(formData, 'name')
  const email = getValue(formData, 'email')
  const phone = getValue(formData, 'phone')
  const dogName = getValue(formData, 'dogName')
  const message = getValue(formData, 'message')
  const turnstileToken = getValue(formData, 'cf-turnstile-response')

  if (!name || !email || !message) {
    return {
      ok: false,
      message: 'Please include your name, email, and message.',
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      message: 'Please enter a valid email address.',
    }
  }

  const isHuman = await verifyTurnstile(turnstileToken)

  if (!isHuman) {
    return {
      ok: false,
      message: 'Please complete the security check and try again.',
    }
  }

  if (!hasUsableDatabaseUri()) {
    return {
      ok: true,
      message: 'Thanks. Your inquiry is ready to submit once the database is connected.',
    }
  }

  try {
    const payload = await getPayloadClient()

    await payload.create({
      collection: 'inquiries',
      data: {
        name,
        email,
        phone,
        dogName,
        message,
      },
    })

    return {
      ok: true,
      message: 'Thanks. We received your inquiry and will follow up soon.',
    }
  } catch {
    return {
      ok: false,
      message: 'Something went wrong. Please call the salon or try again shortly.',
    }
  }
}

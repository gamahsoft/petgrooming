import nodemailer from 'nodemailer'

import { SALON } from '@/lib/constants'

type InquiryEmailInput = {
  name: string
  email: string
  phone: string
  dogName: string
  message: string
}

const inquiryRecipient = process.env.INQUIRY_TO_EMAIL || SALON.email

function getSmtpConfig() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD
  const from = process.env.SMTP_FROM

  if (!host || !user || !pass || !from) {
    return null
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: {
      user,
      pass,
    },
    from,
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatValue(value: string) {
  return value || 'Not provided'
}

function buildInquiryText(inquiry: InquiryEmailInput) {
  return [
    'New inquiry from Upland Pet Grooming website',
    '',
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${formatValue(inquiry.phone)}`,
    `Dog name: ${formatValue(inquiry.dogName)}`,
    '',
    'Message:',
    inquiry.message,
  ].join('\n')
}

function buildInquiryHtml(inquiry: InquiryEmailInput) {
  const rows = [
    ['Name', inquiry.name],
    ['Email', inquiry.email],
    ['Phone', formatValue(inquiry.phone)],
    ['Dog name', formatValue(inquiry.dogName)],
  ]

  return `
    <div style="font-family: Arial, sans-serif; color: #172033; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">New inquiry from Upland Pet Grooming website</h2>
      <table style="border-collapse: collapse; margin-bottom: 20px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="padding: 8px 16px 8px 0; text-align: left; vertical-align: top;">${escapeHtml(label)}</th>
                  <td style="padding: 8px 0; vertical-align: top;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join('')}
        </tbody>
      </table>
      <h3 style="margin: 0 0 8px;">Message</h3>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(inquiry.message)}</p>
    </div>
  `
}

export async function sendInquiryEmail(inquiry: InquiryEmailInput) {
  const smtpConfig = getSmtpConfig()

  if (!smtpConfig) {
    throw new Error('SMTP email delivery is not configured.')
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: smtpConfig.auth,
  })

  await transporter.sendMail({
    from: smtpConfig.from,
    to: inquiryRecipient,
    replyTo: inquiry.email,
    subject: `New grooming inquiry from ${inquiry.name}`,
    text: buildInquiryText(inquiry),
    html: buildInquiryHtml(inquiry),
  })
}

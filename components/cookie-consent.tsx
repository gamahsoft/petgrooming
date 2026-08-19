'use client'

import { ShieldCheck, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

const consentStorageKey = 'upland-pet-grooming-cookie-consent'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(consentStorageKey)
    setIsVisible(!savedConsent)
  }, [])

  function saveConsent(value: 'accepted' | 'denied') {
    window.localStorage.setItem(consentStorageKey, value)
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <section
      aria-label="Privacy and cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 px-4 py-4 shadow-[0_-12px_40px_rgba(15,23,42,0.12)] backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary text-accent">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Your privacy matters</p>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
              We use essential cookies to keep the site working and may use optional cookies to
              understand visits and improve booking. You can accept or deny optional cookies.
            </p>
          </div>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-2 md:flex">
          <Button type="button" variant="outline" onClick={() => saveConsent('denied')}>
            <X className="h-4 w-4" />
            Deny
          </Button>
          <Button type="button" onClick={() => saveConsent('accepted')}>
            Accept
          </Button>
        </div>
      </div>
    </section>
  )
}

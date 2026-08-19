'use client'

import { Send } from 'lucide-react'
import Script from 'next/script'
import { useActionState } from 'react'

import { submitInquiry } from '@/app/actions/inquiries'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitInquiry, {
    ok: false,
    message: '',
  })
  const turnstileSiteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send an inquiry</CardTitle>
        <p className="text-sm text-muted-foreground">
          Ask about coat care, scheduling, or the right service for your dog.
        </p>
      </CardHeader>
      <CardContent>
        {turnstileSiteKey ? (
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="afterInteractive"
          />
        ) : null}
        <form action={formAction} className="grid gap-5">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(909) 555-0138" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dog">Dog name</Label>
            <Input id="dog" name="dogName" placeholder="Dog name and breed" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell us what you need." required />
          </div>
          {turnstileSiteKey ? (
            <div
              className="cf-turnstile min-h-[65px]"
              data-sitekey={turnstileSiteKey}
              data-theme="light"
              data-size="flexible"
            />
          ) : (
            <p className="rounded-md border border-accent/20 bg-accent/10 px-3 py-2 text-sm text-muted-foreground">
              Cloudflare Turnstile is not configured for this environment.
            </p>
          )}
          {state.message ? (
            <p
              className={
                state.ok
                  ? 'rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-primary'
                  : 'rounded-md border border-accent/20 bg-accent/10 px-3 py-2 text-sm text-foreground'
              }
              role="status"
            >
              {state.message}
            </p>
          ) : null}
          <Button type="submit" disabled={isPending}>
            <Send className="h-4 w-4" />
            {isPending ? 'Sending...' : 'Send inquiry'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

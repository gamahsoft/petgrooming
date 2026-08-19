import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

import { BeforeAfterSlider } from '@/components/before-after-slider'
import { BookingDialog } from '@/components/booking-dialog'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,hsl(var(--secondary)),hsl(var(--background))_72%)]">
      <div className="section-shell grid items-center gap-10 py-8 sm:py-10 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex max-w-full items-start gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>Gentle grooming with appointment-first convenience</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            Upland Pet Grooming for dogs who deserve a calmer spa day.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Book bath, brush, full groom, and luxury coat care online in seconds. Our groomers
            focus on comfort, clean styling, and a pick-up-ready finish.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingDialog />
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm sm:gap-4">
            <div>
              <p className="text-2xl font-semibold">4.9</p>
              <p className="text-muted-foreground">Average rating</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">24h</p>
              <p className="text-muted-foreground">Reminder texts</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">3</p>
              <p className="text-muted-foreground">Simple packages</p>
            </div>
          </div>
        </div>
        <BeforeAfterSlider />
      </div>
    </section>
  )
}

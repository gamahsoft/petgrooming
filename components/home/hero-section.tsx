import { ArrowRight, Clock, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import Link from 'next/link'

import { BeforeAfterSlider } from '@/components/before-after-slider'
import { BookingDialog } from '@/components/booking-dialog'
import { Button } from '@/components/ui/button'
import { SALON } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,hsl(var(--secondary)),hsl(var(--background))_72%)]">
      <div className="section-shell grid items-center gap-8 py-6 sm:py-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-10">
        <div>
          <div className="inline-flex max-w-full items-start gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>Gentle grooming with appointment-first convenience</span>
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight min-[380px]:text-4xl sm:text-5xl lg:text-6xl">
            Upland Pet Grooming for dogs who deserve a calmer spa day.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-lg sm:leading-8">
            Book bath, brush, full groom, and luxury coat care online in seconds. Our groomers
            specialize in all breeds with a focus on comfort, clean styling, and a pick-up-ready
            finish.
          </p>
          <div className="mt-4 grid max-w-2xl grid-cols-2 gap-3 rounded-lg border bg-background/85 p-3 text-sm shadow-sm backdrop-blur sm:mt-5 sm:grid-cols-3 sm:p-4">
            <div className="col-span-2 flex gap-3 sm:col-span-1">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <a
                  href={SALON.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex leading-5 text-primary underline-offset-4 hover:underline"
                  aria-label={`Open ${SALON.name} location in maps`}
                >
                  {SALON.address}
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a
                    href={`tel:${SALON.phoneE164}`}
                    className="mt-1 inline-flex font-medium text-primary underline-offset-4 hover:underline"
                    aria-label={`Call ${SALON.name} at ${SALON.phone}`}
                  >
                    {SALON.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href={`mailto:${SALON.email}`}
                    className="mt-1 inline-flex break-all font-medium text-primary underline-offset-4 hover:underline"
                    aria-label={`Email ${SALON.name} at ${SALON.email}`}
                  >
                    {SALON.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-foreground">Hours</p>
                <p className="mt-1 leading-5 text-muted-foreground">{SALON.shortHours}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row">
            <BookingDialog />
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 grid max-w-xl grid-cols-3 gap-3 text-sm sm:gap-4">
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
        <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-[430px]">
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  )
}

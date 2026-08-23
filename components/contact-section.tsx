import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import type { ElementType } from 'react'

import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SALON } from '@/lib/constants'

export function ContactSection({ headingLevel = 'h1' }: { headingLevel?: 'h1' | 'h2' }) {
  const Heading = headingLevel as ElementType

  return (
    <section
      id="contact"
      className="section-shell grid scroll-mt-24 gap-8 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
        <Heading className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Have a question before booking?
        </Heading>
        <div className="mt-8 grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-accent" />
                Salon location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={SALON.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
                aria-label={`Open ${SALON.name} location in maps`}
              >
                {SALON.address}
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-accent" />
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{SALON.hours}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5 text-accent" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`tel:${SALON.phoneE164}`}
                className="font-medium text-primary underline-offset-4 hover:underline"
                aria-label={`Call ${SALON.name} at ${SALON.phone}`}
              >
                {SALON.phone}
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail className="h-5 w-5 text-accent" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${SALON.email}`}
                className="font-medium text-primary underline-offset-4 hover:underline"
                aria-label={`Email ${SALON.name} at ${SALON.email}`}
              >
                {SALON.email}
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      <ContactForm />
    </section>
  )
}

'use client'

import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import type { SiteTestimonial } from '@/lib/cms'

export function TestimonialCarousel({ testimonials }: { testimonials: SiteTestimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  function move(direction: number) {
    setActiveIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  if (!active) return null

  return (
    <section className="section-shell py-16">
      <div className="grid gap-8 rounded-lg bg-primary p-6 text-primary-foreground md:grid-cols-[1fr_auto] md:p-10">
        <div>
          <div className="flex gap-1">
            {Array.from({ length: active.rating }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-5 max-w-3xl text-2xl font-medium leading-snug">
            “{active.quote}”
          </blockquote>
          <p className="mt-5 text-sm text-primary-foreground/75">
            {active.clientName}
            {active.dogName ? `, ${active.dogName}'s person` : ''}
          </p>
        </div>
        <div className="flex gap-2 md:self-end">
          <Button aria-label="Previous review" variant="outline" size="icon" onClick={() => move(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button aria-label="Next review" variant="outline" size="icon" onClick={() => move(1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

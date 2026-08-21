'use client'

import { CalendarDays, ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SALON } from '@/lib/constants'

export function BookingDialog({ compact = false }: { compact?: boolean }) {
  return (
    <Button asChild className={compact ? 'h-10 w-10 px-0 sm:w-auto sm:px-4' : undefined}>
      <a href={SALON.bookingUrl} target="_blank" rel="noreferrer">
        <CalendarDays className="h-4 w-4" />
        <span className={compact ? 'sr-only sm:not-sr-only' : undefined}>Book Appointment</span>
        <ExternalLink className={compact ? 'hidden h-4 w-4 sm:block' : 'h-4 w-4'} />
      </a>
    </Button>
  )
}

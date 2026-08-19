'use client'

import { CalendarDays, ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SALON } from '@/lib/constants'

export function BookingDialog({ compact = false }: { compact?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={compact ? 'h-10 w-10 px-0 sm:w-auto sm:px-4' : undefined}>
          <CalendarDays className="h-4 w-4" />
          <span className={compact ? 'sr-only sm:not-sr-only' : undefined}>Book Appointment</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-y-auto">
        <DialogTitle className="text-xl font-semibold sm:text-2xl">Book your grooming visit</DialogTitle>
        <div className="overflow-hidden rounded-md border bg-card">
          <iframe
            title="Square Appointments booking"
            src={SALON.bookingUrl}
            className="h-[62vh] w-full sm:h-[70vh]"
          />
        </div>
        <Button asChild variant="outline">
          <a href={SALON.bookingUrl} target="_blank" rel="noreferrer">
            Open booking in new tab
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  )
}

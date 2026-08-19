import Link from 'next/link'
import Image from 'next/image'

import { SALON } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="section-shell py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Image
              src="/images/upland-pet-grooming-logo.png"
              alt={SALON.name}
              width={300}
              height={106}
              className="h-auto w-56 rounded-md bg-white p-2"
            />
            <p className="mt-2 max-w-xl text-sm text-background/75">
              Calm grooming, clean coats, and simple appointment booking for dogs across Upland.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-background/75">
            <Link href="/services" className="hover:text-background">
              Services
            </Link>
            <Link href="/gallery" className="hover:text-background">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-background">
              Contact
            </Link>
            <Link href="/admin" className="hover:text-background">
              Admin
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-background/15 pt-6 text-xs text-background/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 • Upland Petgrommers • All Rights Reserved.</p>
          <p>Built for customer convenience, easy booking, and a smoother salon experience.</p>
        </div>
      </div>
    </footer>
  )
}

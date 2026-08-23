import Image from 'next/image'
import Link from 'next/link'

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
              width={1920}
              height={819}
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
          <p>{'\u00a9'} 2026 {'\u2022'} Upland Petgrommers {'\u2022'} All Rights Reserved.</p>
          <p>Built for customer convenience, easy booking, and a smoother salon experience.</p>
        </div>
        <p className="mt-4 text-center text-xs text-background/55">
          This website is powered by{' '}
          <a
            href="https://gamahsoft.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-background/75 underline-offset-4 hover:text-background hover:underline"
          >
            Gamahsoft.com
          </a>
        </p>
      </div>
    </footer>
  )
}

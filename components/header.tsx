import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

import { BookingDialog } from '@/components/booking-dialog'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SALON } from '@/lib/constants'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/92 backdrop-blur">
      <div className="section-shell flex min-h-16 items-center justify-between gap-3 py-3 sm:py-4">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center"
          aria-label={`${SALON.name} home`}
        >
          <Image
            src="/images/upland-pet-grooming-logo.png"
            alt={SALON.name}
            width={260}
            height={92}
            priority
            className="h-12 w-36 object-contain object-left min-[380px]:w-44 sm:h-16 sm:w-60 lg:w-72"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden lg:inline-flex">
            <a href={`tel:${SALON.phoneE164}`}>{SALON.phone}</a>
          </Button>
          <BookingDialog compact />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogTitle>Menu</DialogTitle>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Button key={item.href} asChild variant="ghost" className="justify-start">
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
                <Button asChild variant="ghost" className="justify-start">
                  <a href={`tel:${SALON.phoneE164}`}>{SALON.phone}</a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}

import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import { CookieConsent } from '@/components/cookie-consent'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { getSiteUrl, SALON } from '@/lib/constants'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Upland Pet Grooming | Calm, Clean Dog Grooming',
    template: '%s | Upland Pet Grooming',
  },
  description:
    'Book dog grooming in Upland, CA specializing in all breeds for bath, brush, full groom, and luxury spa services with simple Square appointment scheduling.',
  applicationName: SALON.name,
  creator: SALON.name,
  publisher: SALON.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Upland Pet Grooming | Calm, Clean Dog Grooming',
    description:
      'Book dog grooming in Upland, CA specializing in all breeds for bath, brush, full groom, and luxury spa services.',
    url: '/',
    siteName: SALON.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upland Pet Grooming | Calm, Clean Dog Grooming',
    description:
      'Book dog grooming in Upland, CA specializing in all breeds for bath, brush, full groom, and luxury spa services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}

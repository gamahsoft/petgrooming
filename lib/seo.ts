import type { Metadata } from 'next'

import { FALLBACK_SERVICES, SALON, getSiteUrl } from '@/lib/constants'

export const defaultKeywords = [
  'dog grooming Upland CA',
  'pet grooming Upland',
  'dog bath and brush',
  'full groom dog salon',
  'dog groomer near me',
]

export function absoluteUrl(path = '/') {
  const siteUrl = getSiteUrl()
  return path.startsWith('http') ? path : `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildPageMetadata({
  title,
  description,
  path = '/',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    keywords: defaultKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SALON.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PetGrooming',
    '@id': `${absoluteUrl()}#localbusiness`,
    name: SALON.name,
    url: absoluteUrl(),
    telephone: SALON.phoneE164,
    priceRange: SALON.priceRange,
    image: absoluteUrl('/images/upland-pet-grooming-logo.png'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SALON.streetAddress,
      addressLocality: SALON.city,
      addressRegion: SALON.region,
      postalCode: SALON.postalCode,
      addressCountry: SALON.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SALON.latitude,
      longitude: SALON.longitude,
    },
    openingHours: SALON.openingHours,
    areaServed: ['Upland', 'Claremont', 'Montclair', 'Rancho Cucamonga'],
    makesOffer: FALLBACK_SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.summary,
      },
      price: service.smallDogPrice,
      priceCurrency: 'USD',
      url: absoluteUrl(`/services#${service.slug}`),
    })),
    potentialAction: {
      '@type': 'ReserveAction',
      target: SALON.bookingUrl,
      result: {
        '@type': 'Reservation',
        name: 'Dog grooming appointment',
      },
    },
  }
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do prices change by dog size?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prices are starting points and may change based on coat length, coat condition, temperament, and styling complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I book online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Booking buttons open the Square Appointments flow so clients can pick an available service and time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you groom anxious dogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Clients should mention anxiety, handling preferences, or medical considerations when booking.',
        },
      },
    ],
  }
}

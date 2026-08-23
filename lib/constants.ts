export const SALON = {
  name: 'Upland Pet Grooming',
  phone: '(909) 256-4147',
  phoneE164: '+19092564147',
  email: 'uplandpetgrooming@gmail.com',
  address: '931 W Foothill Blvd, Upland, CA 91786',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=931%20W%20Foothill%20Blvd%2C%20Upland%2C%20CA%2091786',
  streetAddress: '931 W Foothill Blvd',
  city: 'Upland',
  region: 'CA',
  postalCode: '91786',
  country: 'US',
  latitude: 34.1072,
  longitude: -117.6659,
  hours: 'Monday to Saturday, 8:00 AM to 4:30 PM. Sunday closed.',
  shortHours: 'Mon-Sat: 8 AM-4:30 PM. Sun: Closed.',
  openingHours: ['Mo-Sa 08:00-16:30'],
  priceRange: '$$',
  bookingUrl:
    process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL ||
    'https://square.site/book/placeholder-upland-pet-grooming',
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')
}

export const FALLBACK_SERVICES = [
  {
    title: 'Bath & Brush',
    slug: 'bath-brush',
    summary: 'A coat reset with cleansing bath, blow dry, brush-out, ears, and nails.',
    smallDogPrice: 45,
    mediumDogPrice: 65,
    largeDogPrice: 85,
    includes: [
      { item: 'Premium shampoo and conditioner' },
      { item: 'Blow dry and brush-out' },
      { item: 'Nail trim and ear cleaning' },
    ],
  },
  {
    title: 'Full Groom',
    slug: 'full-groom',
    summary: 'Everything in Bath & Brush plus a breed-aware haircut and sanitary trim.',
    smallDogPrice: 75,
    mediumDogPrice: 95,
    largeDogPrice: 125,
    includes: [
      { item: 'Custom haircut and styling' },
      { item: 'Face, feet, and sanitary trim' },
      { item: 'Finishing spritz' },
    ],
  },
  {
    title: 'Luxury Spa',
    slug: 'luxury-spa',
    summary: 'A comfort-first upgrade with specialty treatments for skin, coat, and paws.',
    smallDogPrice: 105,
    mediumDogPrice: 135,
    largeDogPrice: 165,
    includes: [
      { item: 'De-shed or deep-conditioning treatment' },
      { item: 'Paw balm and tooth brushing' },
      { item: 'Bandana and photo moment' },
    ],
  },
]

export const FALLBACK_TESTIMONIALS = [
  {
    clientName: 'Samantha R.',
    dogName: 'Simba',
    rating: 5,
    quote:
      'Simba came home calm, fluffy, and smelling amazing. The online booking made it easy to grab the exact time I needed.',
  },
  {
    clientName: 'James L.',
    dogName: 'Benny',
    rating: 5,
    quote:
      'They listened to every note about Benny’s coat and nailed the tidy teddy-bear cut.',
  },
  {
    clientName: 'Ari S.',
    dogName: 'Luna',
    rating: 5,
    quote:
      'The team is patient with anxious dogs and the results are consistently beautiful.',
  },
]

export const FALLBACK_GALLERY = [
  {
    id: 'before-after',
    alt: 'Before and after full groom transformation',
    url: '/images/after-groom.svg',
  },
  {
    id: 'fresh-trim',
    alt: 'Small dog after a fresh grooming appointment',
    url: '/images/before-groom.svg',
  },
]

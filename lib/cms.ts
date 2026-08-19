import { FALLBACK_GALLERY, FALLBACK_SERVICES, FALLBACK_TESTIMONIALS } from '@/lib/constants'
import { hasUsableDatabaseUri } from '@/lib/env'
import { getPayloadClient } from '@/lib/payload'

export type SiteService = (typeof FALLBACK_SERVICES)[number]
export type SiteTestimonial = (typeof FALLBACK_TESTIMONIALS)[number]
export type GalleryImage = (typeof FALLBACK_GALLERY)[number]

export async function getServices(): Promise<SiteService[]> {
  if (!hasUsableDatabaseUri()) {
    return FALLBACK_SERVICES
  }

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      limit: 20,
      sort: 'sortOrder',
    })

    return result.docs.map((service: any) => ({
      title: service.title,
      slug: service.slug,
      summary: service.summary,
      smallDogPrice: service.smallDogPrice,
      mediumDogPrice: service.mediumDogPrice,
      largeDogPrice: service.largeDogPrice,
      includes: service.includes || [],
    }))
  } catch {
    return FALLBACK_SERVICES
  }
}

export async function getFeaturedServices() {
  const services = await getServices()
  return services.slice(0, 3)
}

export async function getFeaturedTestimonials(): Promise<SiteTestimonial[]> {
  if (!hasUsableDatabaseUri()) {
    return FALLBACK_TESTIMONIALS
  }

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'testimonials',
      limit: 6,
      sort: 'sortOrder',
      where: {
        featured: {
          equals: true,
        },
      },
    })

    return result.docs.map((testimonial: any) => ({
      clientName: testimonial.clientName,
      dogName: testimonial.dogName,
      rating: testimonial.rating,
      quote: testimonial.quote,
    }))
  } catch {
    return FALLBACK_TESTIMONIALS
  }
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  if (!hasUsableDatabaseUri()) {
    return FALLBACK_GALLERY
  }

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'media',
      limit: 30,
      sort: '-createdAt',
      where: {
        category: {
          equals: 'gallery',
        },
      },
    })

    return result.docs.map((image: any) => ({
      id: image.id,
      alt: image.alt,
      url: image.sizes?.gallery?.url || image.url,
    }))
  } catch {
    return FALLBACK_GALLERY
  }
}

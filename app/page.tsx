import { AboutSection } from '@/components/home/about-section'
import { HeroSection } from '@/components/home/hero-section'
import { ServicePreview } from '@/components/home/service-preview'
import { TestimonialCarousel } from '@/components/home/testimonial-carousel'
import { JsonLd } from '@/components/json-ld'
import { getFeaturedServices, getFeaturedTestimonials } from '@/lib/cms'
import { buildPageMetadata, localBusinessJsonLd } from '@/lib/seo'

export const revalidate = 300

export const metadata = buildPageMetadata({
  title: 'Dog Grooming in Upland, CA',
  description:
    'Schedule dog grooming in Upland for bath and brush, full groom, and luxury spa packages with clear pricing and online booking.',
  path: '/',
})

export default async function HomePage() {
  const [services, testimonials] = await Promise.all([
    getFeaturedServices(),
    getFeaturedTestimonials(),
  ])

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <HeroSection />
      <AboutSection />
      <ServicePreview services={services} />
      <TestimonialCarousel testimonials={testimonials} />
    </>
  )
}

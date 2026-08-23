import { ContactSection } from '@/components/contact-section'
import { GallerySection } from '@/components/gallery-section'
import { AboutSection } from '@/components/home/about-section'
import { HeroSection } from '@/components/home/hero-section'
import { ServicePreview } from '@/components/home/service-preview'
import { TestimonialCarousel } from '@/components/home/testimonial-carousel'
import { JsonLd } from '@/components/json-ld'
import { getFeaturedServices, getFeaturedTestimonials, getGalleryImages } from '@/lib/cms'
import { buildPageMetadata, localBusinessJsonLd } from '@/lib/seo'

export const revalidate = 300

export const metadata = buildPageMetadata({
  title: 'Dog Grooming in Upland, CA',
  description:
    'Schedule dog grooming in Upland specializing in all breeds for bath and brush, full groom, and luxury spa packages with clear pricing and online booking.',
  path: '/',
})

export default async function HomePage() {
  const [services, testimonials, galleryImages] = await Promise.all([
    getFeaturedServices(),
    getFeaturedTestimonials(),
    getGalleryImages(),
  ])

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <HeroSection />
      <AboutSection />
      <ServicePreview services={services} />
      <TestimonialCarousel testimonials={testimonials} />
      <GallerySection images={galleryImages} headingLevel="h2" />
      <ContactSection headingLevel="h2" />
    </>
  )
}

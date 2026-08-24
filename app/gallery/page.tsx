import { GallerySection } from '@/components/gallery-section'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Dog Grooming Gallery',
  description:
    'See recent Upland Pet Grooming transformations, tidy trims, bath finishes, and happy dogs from the salon.',
  path: '/gallery',
})

export default function GalleryPage() {
  return <GallerySection />
}

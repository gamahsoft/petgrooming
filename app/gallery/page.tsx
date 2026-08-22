import { GallerySection } from '@/components/gallery-section'
import { getGalleryImages } from '@/lib/cms'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Dog Grooming Gallery',
  description:
    'See recent Upland Pet Grooming transformations, tidy trims, bath finishes, and happy dogs from the salon.',
  path: '/gallery',
})

export const revalidate = 300

export default async function GalleryPage() {
  const images = await getGalleryImages()

  return <GallerySection images={images} />
}

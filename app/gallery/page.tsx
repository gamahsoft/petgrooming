import { GalleryGrid } from '@/components/gallery-grid'
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

  return (
    <div className="section-shell py-12 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Recent grooms
      </p>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        Fresh cuts, soft coats, and happy pups from the grooming table.
      </h1>
      <GalleryGrid images={images} />
    </div>
  )
}

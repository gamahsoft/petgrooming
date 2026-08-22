import type { ElementType } from 'react'

import { GalleryGrid } from '@/components/gallery-grid'
import type { GalleryImage } from '@/lib/cms'

type GallerySectionProps = {
  images: GalleryImage[]
  headingLevel?: 'h1' | 'h2'
}

export function GallerySection({ images, headingLevel = 'h1' }: GallerySectionProps) {
  const Heading = headingLevel as ElementType

  return (
    <section id="gallery" className="section-shell scroll-mt-24 py-12 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Recent grooms
      </p>
      <Heading className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        Fresh cuts, soft coats, and happy pups from the grooming table.
      </Heading>
      <GalleryGrid images={images} />
    </section>
  )
}

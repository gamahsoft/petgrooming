import Image from 'next/image'

import type { GalleryImage } from '@/lib/cms'

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <div key={image.id} className="mb-5 break-inside-avoid overflow-hidden rounded-lg border bg-card">
          <Image
            src={image.url}
            alt={image.alt}
            width={900}
            height={index % 2 === 0 ? 1200 : 800}
            className="h-auto w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

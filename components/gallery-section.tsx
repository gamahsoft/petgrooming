import type { ElementType } from 'react'
import { ClipboardCheck, HeartHandshake, SmilePlus } from 'lucide-react'

import { GalleryGrid } from '@/components/gallery-grid'
import type { GalleryImage } from '@/lib/cms'

type GallerySectionProps = {
  images: GalleryImage[]
  headingLevel?: 'h1' | 'h2'
}

const personalizedCare = [
  {
    icon: ClipboardCheck,
    title: 'Personalized groom notes',
    text: 'We keep track of coat needs, styling preferences, sensitivities, and handling notes so each visit feels more familiar.',
  },
  {
    icon: HeartHandshake,
    title: 'A groomer your dog can trust',
    text: 'When scheduling allows, clients can request the groomer their dog connects with to help build a steady one-on-one relationship.',
  },
  {
    icon: SmilePlus,
    title: 'Less stress over time',
    text: 'Consistent routines, patient handling, and familiar faces can help anxious dogs settle in with more confidence.',
  },
]

export function GallerySection({ images, headingLevel = 'h1' }: GallerySectionProps) {
  const Heading = headingLevel as ElementType

  return (
    <section id="gallery" className="section-shell scroll-mt-24 py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Recent grooms
          </p>
          <Heading className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Personalized grooming that helps dogs feel known, not rushed.
          </Heading>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          Every dog brings a different coat, comfort level, and personality to the table. Our
          team specializes in all breeds and takes time to learn what helps each dog feel safer,
          cleaner, and more relaxed from visit to visit.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {personalizedCare.map((item) => (
          <div key={item.title} className="rounded-lg border bg-card p-5">
            <item.icon className="h-6 w-6 text-accent" />
            <h3 className="mt-5 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
      <GalleryGrid images={images} />
    </section>
  )
}

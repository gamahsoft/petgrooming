import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['filename', 'alt', 'category', 'updatedAt'],
    useAsTitle: 'alt',
  },
  upload: {
    adminThumbnail: 'thumbnail',
    disableLocalStorage: true,
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'gallery',
        width: 900,
        height: 1200,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1600,
        height: 1100,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'gallery',
      options: [
        { label: 'Gallery', value: 'gallery' },
        { label: 'Before & After', value: 'before-after' },
        { label: 'Salon', value: 'salon' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}

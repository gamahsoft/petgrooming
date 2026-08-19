import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['title', 'tier', 'smallDogPrice', 'mediumDogPrice', 'largeDogPrice'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Used in URLs and anchors. Example: full-groom',
      },
    },
    {
      name: 'tier',
      type: 'select',
      required: true,
      options: [
        { label: 'Bath & Brush', value: 'bath-brush' },
        { label: 'Full Groom', value: 'full-groom' },
        { label: 'Luxury Spa', value: 'luxury-spa' },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'smallDogPrice',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'mediumDogPrice',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'largeDogPrice',
          type: 'number',
          required: true,
          min: 0,
        },
      ],
    },
    {
      name: 'includes',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 10,
    },
  ],
}

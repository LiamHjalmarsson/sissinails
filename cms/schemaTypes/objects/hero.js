import {DocumentTextIcon} from '@sanity/icons'

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Cta',
      name: 'cta',
      type: 'cta',
    },

    {
      title: 'Background Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alternative text',
          name: 'alt',
          type: 'string',
        },
      ],
    },
  ],

  icon: DocumentTextIcon,
  preview: {
    select: {
      image: 'image',
    },
    prepare({image}) {
      return {
        title: 'Hero',
        media: image,
      }
    },
  },
}

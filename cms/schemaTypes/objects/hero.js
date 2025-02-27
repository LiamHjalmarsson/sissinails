import {DocumentTextIcon} from '@sanity/icons'

export default {
  title: 'Hero',
  name: 'hero',
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
      title: 'Cta button',
      name: 'cta',
      type: 'cta',
    },

    {
      name: 'image',
      title: 'Background Image',
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

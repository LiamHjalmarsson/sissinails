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
      validation: (rule) => rule.required(),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
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
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title,
        subtitle: 'Hero',
        media: image,
      }
    },
  },
}

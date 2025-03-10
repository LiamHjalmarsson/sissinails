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
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alternative text',
          name: 'alt',
          validation: (rule) => rule.required(),
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

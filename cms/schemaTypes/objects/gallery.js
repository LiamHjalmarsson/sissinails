export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'subtitle',
      title: 'subtitle',
      type: 'string',
    },

    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Image alt',
            },
            {
              type: 'url',
              name: 'link',
              title: 'Link',
            },
          ],
          options: {hotspot: true},
        },
      ],
    },

    {
      title: 'CTA button',
      name: 'button',
      type: 'cta',
    },
  ],
}

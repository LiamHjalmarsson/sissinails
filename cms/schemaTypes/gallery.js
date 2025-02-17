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
          title: 'Image',
          name: 'image',
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Image alt',
            },
          ],
        },
      ],
    },

    {
      name: 'button',
      type: 'object',
      fields: [
        {
          title: 'Button Text',
          name: 'text',
          type: 'string',
        },
        {
          title: 'Url',
          name: 'url',
          type: 'string',
        },
      ],
    },
  ],
}

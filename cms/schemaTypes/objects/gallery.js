export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'object',

  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },

    {
      title: 'subtitle',
      name: 'subtitle',
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
              title: 'Image alt',
              name: 'alt',
              type: 'text',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },

    {
      title: 'CTA button',
      name: 'cta',
      type: 'cta',
    },
  ],

  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare({title, images}) {
      const firstImage = images?.[0]

      return {
        title,
        subtitle: 'Gallery',
        media: firstImage,
      }
    },
  },
}

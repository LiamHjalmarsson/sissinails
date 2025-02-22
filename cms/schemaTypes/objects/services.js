export default {
  title: 'Services',
  name: 'services',
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
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'service title',
              name: 'title',
              type: 'string',
            },

            {
              title: 'Description',
              name: 'description',
              type: 'text',
            },

            {
              title: 'Price',
              name: 'price',
              type: 'string',
            },

            {
              title: 'Duration',
              name: 'duration',
              type: 'string',
            },

            {
              title: 'Image',
              name: 'image',
              type: 'image',
              fields: [
                {
                  title: 'Image alt',
                  name: 'alt',
                  type: 'text',
                },
              ],
              options: {
                aiAssist: {
                  imageInstructionField: 'alt',
                },
              },
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      services: 'services',
    },
    prepare({services}) {
      const service = services?.[0]

      return {
        title: 'Services',
        media: service?.image,
      }
    },
  },
}

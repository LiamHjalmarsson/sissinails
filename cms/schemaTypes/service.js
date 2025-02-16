export default {
  name: 'service',
  title: 'Services',
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
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'service title',
              type: 'string',
            },

            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },

            {
              name: 'price',
              title: 'Price',
              type: 'string',
            },

            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
            },

            {
              title: 'image',
              name: 'Image',
              type: 'image',
              fields: [
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Image alt',
                  rows: 2,
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
}

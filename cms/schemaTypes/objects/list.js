export default {
  title: 'List',
  name: 'list',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'items',
      title: 'List items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'leftItem',
              title: 'Left item',
              type: 'string',
            },
            {
              name: 'rightItem',
              title: 'Right item',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
            },
          ],
        },
      ],

      preview: {
        select: {
          title: 'leftItem',
        },
        prepare({leftItem}) {
          return {
            leftItem,
          }
        },
      },
    },

    {
      name: 'showMap',
      title: 'Show Map',
      type: 'boolean',
      initialValue: true,
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({parent}) => parent?.showMap === true,
    },

    {
      name: 'cta',
      title: 'cta',
      type: 'cta',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subTitle',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
}

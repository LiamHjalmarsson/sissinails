export default {
  title: 'List',
  name: 'list',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subTitle',
      type: 'string',
    },
    {
      title: 'List items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Left item',
              name: 'leftItem',
              type: 'string',
            },
            {
              title: 'Right item',
              name: 'rightItem',
              type: 'string',
            },
            {
              title: 'Icon',
              name: 'icon',
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
      title: 'Show Map',
      name: 'showMap',
      type: 'boolean',
      initialValue: true,
    },

    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({parent}) => parent?.showMap === true,
    },

    {
      title: 'cta',
      name: 'cta',
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

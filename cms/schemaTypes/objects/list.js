import {ListIcon} from '@sanity/icons'

export default {
  title: 'List',
  name: 'list',
  type: 'object',
  icon: ListIcon,
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
          subtitle: 'rightItem',
        },
        prepare({title, subtitle}) {
          return {
            title,
            subtitle,
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
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'List',
      }
    },
  },
}

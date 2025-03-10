export default {
  title: 'Cta',
  name: 'cta',
  type: 'object',
  fields: [
    {
      title: 'Button Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Link Type',
      name: 'linkType',
      type: 'string',
      options: {
        list: [
          {
            title: 'Internal Page',
            value: 'internal',
          },
          {
            title: 'External URL',
            value: 'external',
          },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Link to Internal Page',
      name: 'pageLink',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
      hidden: ({parent}) => parent?.linkType !== 'internal',
    },
    {
      title: 'External Link URL',
      name: 'externalLink',
      type: 'url',
      hidden: ({parent}) => parent?.linkType !== 'external',
    },
  ],

  preview: {
    select: {
      title: 'label',
      subtitle: 'linkType',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Call to Action',
        subtitle: subtitle === 'internal' ? 'Internal Page' : 'External Link',
      }
    },
  },
}

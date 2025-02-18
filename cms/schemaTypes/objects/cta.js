export default {
  name: 'cta',
  title: 'Cta',
  type: 'object',
  fields: [
    {
      title: 'Button label',
      name: 'label',
      type: 'string',
    },

    {
      title: 'Is external link',
      name: 'external',
      type: 'boolean',
    },

    {
      title: 'Link to page',
      name: 'url',
      type: 'reference',
      to: [{type: 'page'}],
    },
  ],
}

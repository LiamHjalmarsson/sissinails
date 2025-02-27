export default {
  title: 'Cta',
  name: 'cta',
  type: 'object',
  fields: [
    {
      title: 'Button label',
      name: 'label',
      type: 'string',
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
    },
  ],
}

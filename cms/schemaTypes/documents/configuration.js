export default {
  name: 'configuration',
  title: 'Site Configuration',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'The main logo of the website.',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    },

    {
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Link Label',
              type: 'string',
            },
            {
              name: 'page',
              title: 'Page Link',
              type: 'reference',
              to: [{type: 'page'}],
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      logo: 'siteLogo',
    },
    prepare({logo}) {
      return {
        title: 'Site Configuration',
        media: logo,
      }
    },
  },
}

import {CogIcon} from '@sanity/icons'

export default {
  name: 'configuration',
  title: 'Site Configuration',
  icon: CogIcon,
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
      name: 'addressInfo',
      title: 'Address Information',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'postalCode',
          title: 'Postal code',
          type: 'string',
        },
        {
          name: 'latitude',
          title: 'Latitude',
          type: 'number',
        },
        {
          name: 'longitude',
          title: 'Longitude',
          type: 'number',
        },
      ],
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
      media: 'logo',
    },

    prepare({media}) {
      return {
        title: 'Site Configuration',
        media,
      }
    },
  },
}

import {CogIcon} from '@sanity/icons'

export default {
  title: 'Site Configuration',
  name: 'configuration',
  icon: CogIcon,
  type: 'document',
  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      title: 'Contact Email',
      name: 'email',
      type: 'string',
    },

    {
      title: 'Contact Phone',
      name: 'phone',
      type: 'string',
    },

    {
      title: 'Address Information',
      name: 'addressInfo',
      type: 'object',
      fields: [
        {
          title: 'Street',
          name: 'street',
          type: 'string',
        },
        {
          title: 'City',
          name: 'city',
          type: 'string',
        },
        {
          title: 'Postal code',
          name: 'postalCode',
          type: 'string',
        },
      ],
    },

    {
      title: 'Navigation Links',
      name: 'navigationLinks',
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
              title: 'Page Link',
              name: 'page',
              type: 'reference',
              to: [
                {
                  type: 'page',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: 'Social Medias',
      name: 'socialMedias',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Platform',
              name: 'platform',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Facebook',
                    value: 'facebook',
                  },
                  {
                    title: 'Instagram',
                    value: 'instagram',
                  },
                  {
                    title: 'TikTok',
                    value: 'tiktok',
                  },
                ],
              },
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
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

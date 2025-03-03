import {CogIcon} from '@sanity/icons'

export default {
  title: 'General Settings',
  name: 'configuration',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      title: 'General',
      name: 'general',
    },
    {
      title: 'Contact',
      name: 'contact',
    },
    {
      title: 'Seo',
      name: 'seo',
    },
  ],

  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'general',
    },

    {
      title: 'Favicon',
      name: 'favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'general',
    },

    {
      title: 'Contact Email',
      name: 'email',
      type: 'string',
      group: 'contact',
    },

    {
      title: 'Contact Phone',
      name: 'phone',
      type: 'string',
      group: 'contact',
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
      group: 'contact',
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
      group: 'general',
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
      group: 'general',
    },

    {
      title: 'Seo',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    },

    {
      title: 'Site Language',
      name: 'lang',
      type: 'string',
      options: {
        list: [
          {
            title: 'English',
            value: 'en',
          },
          {
            title: 'French',
            value: 'fr',
          },
          {
            title: 'Swedish',
            value: 'swe',
          },
        ],
      },
      group: 'general',
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

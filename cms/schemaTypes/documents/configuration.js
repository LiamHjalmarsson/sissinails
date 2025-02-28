import {CogIcon} from '@sanity/icons'

export default {
  title: 'Site Configuration',
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
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      group: 'seo',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      group: 'seo',
    },
    {
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
      group: 'seo',
    },
    {
      title: 'Canonical URL',
      name: 'ogUrl',
      type: 'url',
      group: 'seo',
    },
    {
      title: 'twitter card',
      name: 'card',
      type: 'string',
      group: 'seo',
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

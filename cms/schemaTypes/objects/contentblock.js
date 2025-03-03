import {BlockElementIcon} from '@sanity/icons'

export default {
  title: 'Content Block',
  name: 'contentblock',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Select Type',
              name: 'contentType',
              type: 'string',
              options: {
                list: [
                  {title: 'Image / Images', value: 'images'},
                  {title: 'Text', value: 'text'},
                  {title: 'Call to Action', value: 'cta'},
                ],
                layout: 'radio',
              },
            },
            {
              title: 'Title',
              name: 'title',
              type: 'string',
              hidden: ({parent}) => parent?.contentType !== 'text',
            },

            {
              title: 'Subtitle',
              name: 'subtitle',
              type: 'string',
              hidden: ({parent}) => parent?.contentType !== 'text',
            },

            {
              title: 'Text',
              name: 'text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => parent?.contentType !== 'text',
            },

            {
              title: 'Images',
              name: 'images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  fields: [
                    {
                      title: 'Image alt',
                      name: 'alt',
                      type: 'text',
                    },
                    {
                      title: 'Link',
                      name: 'link',
                      type: 'url',
                    },
                  ],
                  options: {hotspot: true},
                },
              ],
              options: {layout: 'grid'},
              hidden: ({parent}) => parent?.contentType !== 'images',
            },
            {
              title: 'Call to Action',
              name: 'cta',
              type: 'cta',
              hidden: ({parent}) => parent?.contentType !== 'cta',
            },
          ],

          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
              media: 'images',
            },
            prepare({title, subtitle, media}) {
              const firstImage = media?.[0]

              return {
                title: title || (firstImage ? 'Image' : 'Cta'),
                subtitle: subtitle,
                media: firstImage || BlockElementIcon,
              }
            },
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'items.0.title',
      subtitle: 'items.0.subtitle',
      media: 'items.0.images.0',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Content Section',
        subtitle: subtitle || 'Content Block',
        media: media || BlockElementIcon,
      }
    },
  },
}

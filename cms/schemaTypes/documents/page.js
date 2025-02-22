import {DocumentIcon} from '@sanity/icons'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: DocumentIcon,

  groups: [
    {
      title: 'Page',
      name: 'page',
    },

    {
      title: 'Seo',
      name: 'seo',
    },

    {
      title: 'Page builder',
      name: 'page-builder',
    },
  ],

  fields: [
    {
      title: 'Page title',
      name: 'title',
      type: 'string',
      group: 'page',
    },

    {
      title: 'Page slug',
      name: 'slug',
      type: 'slug',
      group: 'page',
      options: {
        source: 'title',
      },
    },

    {
      title: 'SEO Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    },

    {
      title: 'Page builder',
      name: 'pageBuilder',
      type: 'array',
      group: 'page-builder',
      of: [
        {
          name: 'hero',
          type: 'hero',
        },

        {
          name: 'gallery',
          type: 'gallery',
        },

        {
          name: 'testimonials',
          type: 'testimonials',
        },

        {
          name: 'services',
          type: 'services',
        },

        {
          name: 'list',
          type: 'list',
        },
      ],

      options: {
        insertMenu: {
          filter: true,
          groups: [
            {
              name: 'hero',
              title: 'Hero',
              of: ['hero'],
            },

            {
              name: 'services',
              title: 'Services',
              of: ['services'],
            },

            {
              name: 'gallery',
              title: 'Gallery',
              of: ['gallery'],
            },

            {
              name: 'testimonials',
              title: 'Testimonials',
              of: ['testimonials'],
            },
          ],
          views: [
            {name: 'list'},
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.jpg`,
            },
          ],
        },
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {title}
    },
  },
}

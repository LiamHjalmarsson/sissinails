import {DocumentIcon} from '@sanity/icons'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'services',
      title: 'Services',
    },
    {
      name: 'gallery-section',
      title: 'Gallery',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },

    {
      name: 'isHomePage',
      title: 'Is HomePage',
      type: 'boolean',
      initialValue: false,
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },

      hidden: ({parent}) => parent.isHomePage,

      validation: (Rule) =>
        Rule.custom((slug, context) => {
          if (context.document.isHomePage) {
            return true
          }
          if (!slug) {
            return 'Slug is required'
          }
          return true
        }).error('Slug is required'),
    },

    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    },

    {
      name: 'services',
      title: 'Services',
      type: 'service',
      group: 'services',
    },

    {
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery',
      group: 'gallery-section',
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

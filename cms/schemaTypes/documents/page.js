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
      title: 'SEO',
      name: 'seo',
    },
    {
      title: 'Page builder',
      name: 'builder',
    },
  ],

  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
      group: 'page',
    },

    {
      title: 'Page Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      group: 'page',
    },

    {
      title: 'SEO Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    },

    {
      title: 'Page builder',
      name: 'builder',
      type: 'builder',
      group: 'builder',
    },
  ],
}

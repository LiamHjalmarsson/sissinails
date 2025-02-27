import {DocumentIcon} from '@sanity/icons'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
    },

    {
      title: 'SEO Settings',
      name: 'seo',
      type: 'seo',
    },

    {
      title: 'Page builder',
      name: 'builder',
      type: 'builder',
    },
  ],
}

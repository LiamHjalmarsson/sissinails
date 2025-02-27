import {HomeIcon} from '@sanity/icons'

export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      title: 'Hero',
      name: 'hero',
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

  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {title}
    },
  },
}

import {HomeIcon} from '@sanity/icons'

export default {
  title: 'Start Page',
  name: 'homePage',
  type: 'document',
  icon: HomeIcon,
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
      title: 'Page builder',
      name: 'builder',
      type: 'builder',
      group: 'builder',
    },

    {
      title: 'SEO Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    },
  ],

  preview: {
    prepare() {
      return {title: 'Home'}
    },
  },
}

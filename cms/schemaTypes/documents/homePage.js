import {HomeIcon} from '@sanity/icons'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'header',
      title: 'Header',
    },
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
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    },

    {
      name: 'header',
      title: 'Header',
      type: 'header',
      group: 'header',
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

import {HomeIcon} from '@sanity/icons'

export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      title: 'hero',
      name: 'hero',
    },
    {
      title: 'SEO',
      name: 'seo',
    },

    {
      title: 'Gallery',
      name: 'gallery-section',
    },
    {
      title: 'Testimonials',
      name: 'testimonials-section',
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
      title: 'Hero',
      name: 'hero',
      type: 'hero',
      group: 'hero',
    },

    {
      title: 'Service',
      name: 'service',
      type: 'services',
    },

    {
      title: 'Gallery',
      name: 'gallery',
      type: 'gallery',
      group: 'gallery-section',
    },

    {
      title: 'Testimonials Sections',
      name: 'testimonials',
      type: 'testimonials',
      group: 'testimonials-section',
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

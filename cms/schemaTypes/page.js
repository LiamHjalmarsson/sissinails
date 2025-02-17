export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
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
      title: 'gallery',
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

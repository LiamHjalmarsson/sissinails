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

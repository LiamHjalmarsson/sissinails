import {DocumentIcon} from '@sanity/icons'

export default {
  name: 'page',
  title: 'Other Pages',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
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
      name: 'content',
      title: 'Content',
      type: 'blockContent',
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

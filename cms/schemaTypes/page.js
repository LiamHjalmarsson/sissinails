export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
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
      title: 'articleImage',
      name: 'articleImage',
      type: 'image',
      fields: [
        {
          type: 'text',
          name: 'promptForImage',
          title: 'Image prompt',
          rows: 2,
        },
      ],
      options: {
        aiAssist: {
          imageInstructionField: 'promptForImage',
        },
      },
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

export default {
  title: 'Page Builder',
  name: 'builder',
  type: 'object',
  fields: [
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [
        {
          type: 'hero',
        },
        {
          type: 'gallery',
        },
        {
          type: 'testimonial',
        },
        {
          type: 'service',
        },
        {
          type: 'list',
        },
      ],
      options: {
        insertMenu: {
          filter: true,
          groups: [
            {
              title: 'Hero',
              name: 'hero',
              of: ['hero'],
            },
            {
              title: 'Service',
              name: 'service',
              of: ['service'],
            },
            {
              title: 'List',
              name: 'list',
              of: ['list'],
            },
            {
              title: 'Gallery',
              name: 'gallery',
              of: ['gallery'],
            },
            {
              title: 'Testimonial',
              name: 'testimonial',
              of: ['testimonial'],
            },
            {
              title: 'contentBlock',
              name: 'contentBlock',
              of: ['contentBlock'],
            },
          ],
          views: [
            {name: 'list'},
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) =>
                schemaTypeName ? `/static/preview-${schemaTypeName}.jpg` : '',
            },
          ],
        },
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {title: title || 'Untitled Page'}
    },
  },
}

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Block Type',
          type: 'string',
          options: {
            list: [
              {title: 'Text', value: 'text'},
              {title: 'Image', value: 'image'},
              {title: 'Button', value: 'button'},
            ],
            layout: 'radio',
          },
        },
        {
          name: 'textContent',
          title: 'Text Content',
          type: 'text',
          hidden: ({parent}) => parent?.type !== 'text',
        },
        {
          name: 'imageContent',
          title: 'Image Content',
          type: 'image',
          options: {
            hotspot: true,
          },
          hidden: ({parent}) => parent?.type !== 'image',
        },
        {
          name: 'imageAltText',
          title: 'Image Alt Text',
          type: 'string',
          hidden: ({parent}) => parent?.type !== 'image',
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          hidden: ({parent}) => parent?.type !== 'button',
        },
        {
          name: 'buttonUrl',
          title: 'Button URL',
          type: 'url',
          hidden: ({parent}) => parent?.type !== 'button', // Only visible when the type is 'button'
        },
      ],
    },
  ],
}

export default {
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
    },
    {
      name: 'ogUrl',
      title: 'Canonical URL',
      type: 'url',
    },
    {
      name: 'card',
      title: 'twitter card',
      type: 'string',
    },
  ],
}

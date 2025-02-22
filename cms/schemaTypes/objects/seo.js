export default {
  title: 'SEO Settings',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
    },
    {
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
    },
    {
      title: 'Canonical URL',
      name: 'ogUrl',
      type: 'url',
    },
    {
      title: 'twitter card',
      name: 'card',
      type: 'string',
    },
  ],
}

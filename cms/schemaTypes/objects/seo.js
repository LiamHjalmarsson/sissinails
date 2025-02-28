export default {
  title: 'SEO Settings',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'Enable Custom SEO',
      name: 'enableCustomSeo',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      hidden: ({parent}) => !parent?.enableCustomSeo,
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      hidden: ({parent}) => !parent?.enableCustomSeo,
    },
    {
      title: 'Open Graph Title',
      name: 'ogTitle',
      type: 'string',
      hidden: ({parent}) => !parent?.enableCustomSeo,
    },
    {
      title: 'Open Graph Description',
      name: 'ogDescription',
      type: 'text',
      hidden: ({parent}) => !parent?.enableCustomSeo,
    },
    {
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
      hidden: ({parent}) => !parent?.enableCustomSeo,
    },
    {
      title: 'Canonical URL',
      name: 'canonicalUrl',
      type: 'url',
      hidden: ({parent}) => !parent?.enableCustomSeo,
    },
    {
      title: 'Twitter Card Type',
      name: 'twitterCard',
      type: 'string',
      hidden: ({parent}) => !parent?.enableCustomSeo,
    },
  ],
  preview: {
    select: {
      title: 'metaTitle',
      description: 'metaDescription',
    },
    prepare({title, description}) {
      return {
        title: title || 'No Meta Title',
        subtitle: description || 'No Meta Description',
      }
    },
  },
}

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',

  fields: [
    {
      name: 'name',
      title: 'Customer Name',
      type: 'string',
    },
    {
      name: 'review',
      title: 'Review Text',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5).error('Rating must be between 1 and 5'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'name',
      rating: 'rating',
      image: 'image',
    },
    prepare({title, rating, image}) {
      return {
        title,
        subtitle: `Rating: ${rating}/5`,
        media: image,
      }
    },
  },
}

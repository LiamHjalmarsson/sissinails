export default {
  title: 'Testimonials',
  name: 'testimonials',
  type: 'object',
  fields: [
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'array',
      of: [
        {
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
              title: 'Customer Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      testimonials: 'testimonial',
    },
    prepare({testimonials}) {
      const testimonial = testimonials?.[0]

      return {
        title: 'Testimonials',
        media: testimonial?.image,
      }
    },
  },
}

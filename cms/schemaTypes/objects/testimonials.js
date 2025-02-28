export default {
  title: 'Testimonial',
  name: 'testimonial',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Customer Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Review Text',
              name: 'description',
              type: 'text',
            },
            {
              title: 'Rating',
              name: 'rating',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5).error('Rating must be between 1 and 5'),
            },
            {
              title: 'Customer Image',
              name: 'image',
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
      title: 'title',
      testimonials: 'testimonials',
    },
    prepare({title, testimonials}) {
      const testimonial = testimonials?.[0]

      return {
        title,
        subtitle: 'Testimonials',
        media: testimonial?.image,
      }
    },
  },
}

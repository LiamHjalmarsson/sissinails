export default {
  name: 'open',
  title: 'Open',
  type: 'object',
  groups: [
    {
      name: 'open',
      title: 'Open',
    },
  ],
  fields: [
    {
      title: 'Open hours',
      name: 'openHours',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}

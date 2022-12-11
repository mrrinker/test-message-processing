const schema = {
  type: 'object',
  properties: {
    first: { type: 'string' },
    last: { type: 'string' }
  },
  required: ['first'],
  additionalProperties: true
}

module.exports = schema

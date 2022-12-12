const schema = {
  type: 'object',
  properties: {
    first: {$ref: '#/definitions/nonEmptyString'},
    last: {$ref: '#/definitions/nonEmptyString'}
  },
  definitions: {
    nonEmptyString: {
        type: 'string',
        pattern: '^\\S.*$'
      }
  },
  required: ['first', 'last'],
  additionalProperties: true
}

module.exports = schema

const Ajv = require('ajv')
const schema = require('./schema')
const ajv = new Ajv()

class Validator {
  /***
   * Construct
   */
  constructor (message) {
    if (!message || message.trim().length === 0) {
      throw new Error('must pass a message')
    }
    this.message = message
  }

  /**
   * Validate
   */
  validate () {
    let obj = null
    try {
      obj = JSON.parse(this.message)
    } catch (err) {
      // Not a valid object so reject it
      console.log(err.message)
      return false
    }

    const validate = ajv.compile(schema)

    const valid = validate(obj)

    if (!valid) console.error(validate.errors)
    return valid
  }
}

module.exports = Validator

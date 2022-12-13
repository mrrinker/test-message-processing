const EventEmitter = require('node:events')
const Validator = require('./validator')
const Processor = require('./processor')
const Transmitter = require('./transmitter')
const Consumer = require('./consumer')

class Orchestrator extends EventEmitter {

  /**
   * Run the orchestration
   */
  run () {
    // Register events
    this.on('validate', this.#validate)
    this.on('process', this.#process)
    this.on('transmit', this.#transmit)

    const consumer = new Consumer()
    consumer.consume(this, 'validate')
  }

  /**
   * Process the message.
   * Validation has passed so focus on processing.
   * @param {*} message
   */
  #process (message) {
    const processor = new Processor(message)
    if (processor.process()) {
      this.emit('transmit', message)
    }
  }

  /**
   * Validate the requested message
   * @param {*} message
   */
  #validate (message) {
    const validator = new Validator(message)
    if (validator.validate()) {
      this.emit('process', message)
    }
  }

  /**
   * Transmit the requested message
   * @param {*} message
   */
  #transmit (message) {
    const transmitter = new Transmitter(message)
    transmitter.transmit()
  }
}

module.exports = Orchestrator

const consumer = require('./consumer')
const Validator = require('./validator')
const Processor = require('./processor')
const Transmitter = require('./transmitter')

/**
 * Start the consumer which emits validate if input
 * if passes initial test
 */
consumer.start()

/**
 * Register a transmitter
 */
consumer.on('transmit', (message) => {
  const transmitter = new Transmitter(message)
  transmitter.transmit()
})

/**
 * Register a processor
 */
consumer.on('process', (message) => {
  const processor = new Processor(message)
  if (processor.process()) {
    consumer.emit('transmit', message)
  }
})

/***
 * Register a validator
 */
consumer.on('validate', (message) => {
  const validator = new Validator(message)
  if (validator.validate()) {
    consumer.emit('process', message)
  }
})

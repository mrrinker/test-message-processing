const readline = require('readline')
const EventEmitter = require('node:events')

class Consumer extends EventEmitter {
  /**
     * Start and consume
     */
  start () {
    console.log('consumer start')
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })

    rl.on('line', (line) => {
      if (line && line.trim().length > 0) {
        this.emit('validate', line)
      }
    })

    rl.once('close', () => {
      // end of input
    })
  }
}

module.exports = new Consumer()

const readline = require('readline')

class Consumer {
  /**
   * Start consuming
   * @param {*} orchestrator
   * @param {*} eventName
   */
  consume (orchestrator, eventName) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })

    rl.on('line', (line) => {
      if (line) {
        const lineTrim = line.trim()
        if (lineTrim.length > 0) {
          orchestrator.emit(eventName, lineTrim)
        }
      }
    })

    rl.once('close', () => {
      // end of input
    })
  }
}

module.exports = Consumer

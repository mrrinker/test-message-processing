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
      if (line && line.trim().length > 0) {
        orchestrator.emit(eventName, line)
      }
    })

    rl.once('close', () => {
      // end of input
    })
  }
}

module.exports = Consumer

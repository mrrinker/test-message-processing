class Processor {
  constructor (message) {
    this.message = message
  }

  process () {
    console.log('processing.....')
    const obj = JSON.parse(this.message)
    console.log(`processing ${obj.first}`)
    return true
  }
}

module.exports = Processor

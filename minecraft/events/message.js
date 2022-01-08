const { messageLog } = require('../../constants/functions/log.js')

module.exports = {
  name: "message",
  async execute(message) {
    messageLog(message.toString())
  }
}
const { messageLog } = require('../../constants/functions/logging.js')

module.exports = {
  name: "message",
  async execute(message) {
    messageLog(message.toString())
  }
}
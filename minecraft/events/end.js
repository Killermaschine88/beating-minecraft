const { warnLog } = require('../../constants/functions/logging.js')

module.exports = {
  name: "end",
  async execute(reason) {
    warnLog(`Disconnected. Reason ${reason}`)
  }
}
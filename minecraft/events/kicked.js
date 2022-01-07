const { errorLog } = require('../../constants/functions/logging.js')

module.exports = {
  name: "kicked",
  async execute(reason, wasLoggedIn) {
    errorLog(reason)
  }
}
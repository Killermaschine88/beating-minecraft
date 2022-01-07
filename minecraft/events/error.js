const { errorLog } = require('../../constants/functions/logging.js')

module.exports = {
  name: "error",
  async execute(err) {
    errorLog(err)
  }
}
const { infoLog } = require('../../constants/functions/log.js')

module.exports = {
  name: "autoeat_started",
  async execute() {
    infoLog('Started eating.')
  }
}
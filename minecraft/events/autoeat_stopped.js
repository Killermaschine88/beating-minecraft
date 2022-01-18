const { infoLog } = require('../../constants/functions/log.js')

module.exports = {
  name: "autoeat_stopped",
  async execute() {
    infoLog('Stopped eating.')
  }
}
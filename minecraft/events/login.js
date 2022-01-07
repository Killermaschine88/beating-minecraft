const { infoLog } = require('../../constants/functions/logging.js')

module.exports = {
  name: "login",
  async execute() {
    infoLog('Logged into the Minecraft Account.')
  }
}
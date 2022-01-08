const { infoLog } = require('../../constants/functions/log.js')

module.exports = {
  name: "login",
  async execute() {
    infoLog('Logged into the Minecraft Account.')
  }
}
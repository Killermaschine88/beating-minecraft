const { green, red } = require('colorette')
const { fixMinecraftMessage } = require('./misc.js')

function infoLog(text) {
  console.log(green('[Info] ') + fixMinecraftMessage(text))
}

function errorLog(text) {
  console.log(red('[ERROR] ') + fixMinecraftMessage(text))
}

module.exports = { infoLog, errorLog }
const { green, red, yellow, white, gray } = require('colorette')
const { fixMinecraftMessage } = require('./misc.js')

function infoLog(text, tag = 'INFO') {
  console.log(green(`[${tag}] `) + fixMinecraftMessage(text))
}

function errorLog(text) {
  console.log(red('[ERROR] ') + fixMinecraftMessage(text))
}

function warnLog(text) {
  console.log(yellow('[WARN] ') + fixMinecraftMessage(text))
}

function messageLog(text) {
  console.log(gray('[MESSAGE] ') + fixMinecraftMessage(text))
}

module.exports = { infoLog, errorLog, warnLog, messageLog }
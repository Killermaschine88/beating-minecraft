const mineflayer = require('mineflayer')

function startMinecraftBot() {

  const bot = mineflayer.createBot({
    host: 'ybaltraz.aternos.me',
    port: '38196',
    username: 'baltraz',
    version: '1.8.9'
  })

  return bot
}

module.exports = { startMinecraftBot }
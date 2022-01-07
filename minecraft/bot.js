const mineflayer = require('mineflayer')

function startMinecraftBot() {
  
  const bot = mineflayer.createBot({
    host: 'ybaltraz.aternos.me',
    port: '38196',
    username: 'Test'
  })

  return bot
}

module.exports = { startMinecraftBot }
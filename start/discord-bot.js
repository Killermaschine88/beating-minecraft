function startDiscordBot() {
  const Discord = require('discord.js')
  const client = new Discord.Client({ intents: [ 'GUILDS', 'GUILD_MESSAGES' ] })

  client.login(process.env['token'])

  return client
}

module.exports = { startDiscordBot }
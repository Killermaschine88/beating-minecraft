const Discord = require('discord.js')
const { infoLog } = require('../../constants/functions/log.js')

module.exports = {
  name: "messageCreate",
  async execute(message) {
    if(message.author.bot) return
    const msg = message //to keep original message

    //new from here
    if(message.content.startsWith('sudo')) {
      const content = message.content.replace('sudo ', '')

      //
    }
  }
}
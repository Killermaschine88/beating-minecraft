const Discord = require('discord.js')
const { mineBlockChannel } = require('../../constants/config.json')
const { mineBlock } = require('../../constants/functions/block.js')

module.exports = {
  name: "messageCreate",
  async execute(message) {
    if(message.author.bot) return
    if(message.channel.id === mineBlockChannel) {

      const block = bot.mcData.blocksByName[message.content] ? bot.mcData.blocksByName[message.content] : undefined

      if(!block) {
        return message.channel.send(`Can't find \`${message.content}\` as valid block.`)
      }

      mineBlock(block)

    }
  }
}
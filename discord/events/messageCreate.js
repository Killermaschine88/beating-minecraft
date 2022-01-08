const Discord = require('discord.js')
const { mineBlockChannel, gotoChannel, attackChannel } = require('../../constants/config.json')
const { mineBlock } = require('../../constants/functions/block.js')
const { gotoLocation } = require('../../constants/functions/walk.js')
const { infoLog } = require('../../constants/functions/log.js')

module.exports = {
  name: "messageCreate",
  async execute(message) {
    if(message.author.bot) return
    const msg = message //to keep original message
    let args = message.content.split(' ')
    if(message.content.startsWith('sudo')) {
      args = args.slice(2)
    }

    //Handling breaking blocks by name
    if(message.channel.id === mineBlockChannel || msg.content.includes('sudo break')) {
      const amount = args[0]
      const name = args.slice(1).join('_')

      if(isNaN(Number(amount)) && !mes) {
        return message.channel.send('Format: \`Number\` \`block_name\`')
      }

      const block = bot.mcData.blocksByName[name] ? bot.mcData.blocksByName[name] : undefined

      if(!block) {
        return message.channel.send(`Can't find \`${name}\` as valid block.`)
      }

      const check = bot.findBlock({matching: block.id,
                                     maxDistance: 32})

      if(!check) {
        return message.channel.send(`Can't find any \`${block.displayName}\` nearby.`)
      }

      mineBlock(amount, block)

    }

    //Handling Walking
    if(message.channel.id === gotoChannel || msg.content.includes('sudo goto')) {
      const type = args[0]
      const name = args.slice(1).join(' ')
      const available_types = [ 'mob', 'location' ]

      if(!available_types.includes(type)) {
        return message.channel.send(`Type must be any of the following: \`${available_types.join(', ')}\``)
      }

      if(type === 'mob') {
        const mob = name ? bot.nearestEntity(entity => entity.type === 'mob' && entity.mobType.toLowerCase() === name) : bot.nearestEntity(entity => entity.type === 'mob')

        if(!mob) {
          return message.channel.send(`Can't find any ${name} nearby.`)
        }

        gotoLocation(mob.position)
        message.channel.send(`Going to ${mob.displayName}`)

      } else if(type === 'location') {
        	
      }
    } else if(message.channel.id === attackChannel || msg.content.includes('sudo attack')) {

    }
  }
}
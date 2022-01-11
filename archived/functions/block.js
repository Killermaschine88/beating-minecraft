//const { infoLog } = require('./log.js')
let i = 0

async function mineBlock(amount, block) {

  if(!block) infoLog(`No block to mine. / Stopped.`)
  if(i >= amount) {
    i = 0
    infoLog('Stopped', 'MINE')
    return
  }

  const block_to_mine = bot.findBlock({
    matching: block.id,
    maxDistance: 32
  })

  if(!block_to_mine) return
  try {
    await bot.tool.equipForBlock(block_to_mine, {})
  } catch (e) {}

    bot.collectBlock.collect(block_to_mine, err => {
      if (err) {
        console.log(err)
      } else {
        infoLog(`${block.displayName}`, 'MINE')
        i++
        mineBlock(amount, block)
      }
    })
}

module.exports = { mineBlock }
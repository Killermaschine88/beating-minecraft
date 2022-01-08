const { infoLog } = require('./log.js')

function mineBlock(block) {

  if(!block) infoLog(`No block to mine. / Stopped.`)

  const block_to_mine = bot.findBlock({
    matching: block.id,
    maxDistance: 64
  })

  console.log(block_to_mine)

  if(!block_to_mine) return

    bot.collectBlock.collect(block_to_mine, err => {
      if (err) {
        console.log(err)
      } else {
        infoLog(`${block}`, 'MINED')
        mineBlock(block)
      }
      
    })
}

module.exports = { mineBlock }
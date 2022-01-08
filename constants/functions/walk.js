const mineflayer = require('mineflayer')
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear } = require('mineflayer-pathfinder').goals

function gotoLocation(pos) {
  const defaultMove = new Movements(bot, bot.mcData)
  bot.pathfinder.setMovements(defaultMove)
  bot.pathfinder.setGoal(new GoalNear(pos.x, pos.y, pos.z, 1))
}

module.exports = { gotoLocation }
function fixMinecraftMessage(text) {
  return text.replace(/\u00A7[0-9A-FK-OR]/gi, '')
}

module.exports = { fixMinecraftMessage }
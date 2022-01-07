const { startMinecraftBot } = require('./start/bot.js')
const fs = require('fs')

//Getting Bot Object and globally assign it
global.bot = startMinecraftBot()

//Event handling
const eventFiles = fs.readdirSync('./minecraft/events').filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./minecraft/events/${file}`);
	if (event.once) {
		bot.once(event.name, (...args) => event.execute(...args, bot));
	} else {
		bot.on(event.name, (...args) => event.execute(...args, bot));
	}
}
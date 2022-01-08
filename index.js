const { startMinecraftBot } = require('./start/minecraft-bot.js')
const { startDiscordBot } = require('./start/discord-bot.js')
const fs = require('fs')

//Getting Bot Object and globally assign it
global.bot = startMinecraftBot()

//Minecraft Event handling
const minecraftEventFiles = fs.readdirSync('./minecraft/events').filter((file) => file.endsWith('.js'));

for (const file of minecraftEventFiles) {
	const event = require(`./minecraft/events/${file}`);
	if (event.once) {
		bot.once(event.name, (...args) => event.execute(...args));
	} else {
		bot.on(event.name, (...args) => event.execute(...args));
	}
}


//Getting Discord Bot Object and globally assign it
global.client = startDiscordBot()

//Discord Event handling
const discordEventFiles = fs.readdirSync('./discord/events').filter((file) => file.endsWith('.js'));

for (const file of discordEventFiles) {
	const event = require(`./discord/events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
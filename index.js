const Discord = require('discord.js');
const bot = new Discord.Client({intents: 3276799})
const config = require('./config')
const loadcmd = require('./Handler/LoadCommand')
const loadevent = require('./Handler/LoadEvents')
bot.commands = new Discord.Collection()

bot.login(config.token)
loadcmd(bot)
loadevent(bot)

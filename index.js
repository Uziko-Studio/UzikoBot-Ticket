const Discord = require('discord.js');
const bot = new Discord.Client({intents: 3276799})
const config = require('./config')
const loadevent = require('./Handler/LoadEvents')
const loadcmd = require('./Handler/LoadCommand')
bot.commands = new Discord.Collection()

bot.login(config.token)
loadcmd(bot)
loadevent(bot)

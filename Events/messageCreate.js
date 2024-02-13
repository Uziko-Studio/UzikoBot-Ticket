const Discord = require('discord.js');
const Config = require('../config.js');
module.exports = async (bot, msg) => {
    let prefix = config.prefix

    let messageArray = msg.content.split(' ')
    let commandname = messageArray[0].split('prefix.length')
    let args = messageArray.split(1)
    
    if(!msg.content.startswith(prefix)) return;

    let command = require(`../commands/${commandname}`)
    if (!command) return;

    command.run(bot, msg, args)
}
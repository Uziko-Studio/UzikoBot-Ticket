const Discord = require('discord.js');

module.exports = {

    name: "ping",
    description: "lets you see the pings of the bot",
    permissions: "null",
    dm : true,
    

    async run(bot, msg){
        await msg.reply(`Ping ${bot.ws.ping}`);
    }
}
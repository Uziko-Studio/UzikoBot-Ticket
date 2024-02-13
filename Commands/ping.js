const Discord = require('discord.js');

module.exports = {

    name: "ping",

    async run(bot, msg){
        await msg.reply(`Ping ${bot.ws.ping}`);
    }
}
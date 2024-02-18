const Discord = require('discord.js');
const config = require('../config');
module.exports = async (bot, integration) => {
    const guild = integration.guild;
    const chan = guild.channels.cache;
    const name = `ticket-${integration.user.username}`;
    const check = chan.find(ch => ch.name === name && ch.type === Discord.ChannelType.GuildText)
    if(check){
        await check.delete();
    }else{
        await integration.reply("comment vous faite")
    }
}
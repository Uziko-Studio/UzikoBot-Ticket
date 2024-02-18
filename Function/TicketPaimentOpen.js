const Discord = require('discord.js')
const config = require('../config')
const open = require('./NewTickets')

module.exports =  async (bot, interation) =>{
    const guild = interation.guild;
    const chan = guild.channels.cache;
    const name = `ticket-${interation.user.username}`;
    const check = chan.find(ch => ch.name === name && ch.type === Discord.ChannelType.GuildText)
    if (!check){
        let channel = await interation.guild.channels.create({
            name: `ticket-${interation.user.username}`,
            type: Discord.ChannelType.GuildText,
        })
        const parent = await bot.channels.fetch(config.tickets.Paiement)
        await channel.setParent(parent);
        await channel.permissionOverwrites.create(interation.guild.roles.everyone,{
            ViewChannel: false,
        })
        await channel.permissionOverwrites.create(interation.user,{
            ViewChannel: true,
            EmbedLinks: true,
            SendMessages: true,
            AttachFiles: true,
            ReadMessageHistory: true
        })
        await channel.permissionOverwrites.create(config.roles.owner,{
            ViewChannel: true,
            EmbedLinks: true,
            SendMessages: true,
            AttachFiles: true,
            ReadMessageHistory: true
        })
        await channel.permissionOverwrites.create(config.roles.admin,{
            ViewChannel: true,
            EmbedLinks: true,
            SendMessages: true,
            AttachFiles: true,
            ReadMessageHistory: true
        })
        await interation.reply({content: `Votre Ticket a été crée : ${channel}`, ephemeral: true})
        await open(bot, channel, interation, "paiment")
    }else {
        await interation.reply({content: `Vous avez deja un ticket: ${check}`, ephemeral: true})
    }

}
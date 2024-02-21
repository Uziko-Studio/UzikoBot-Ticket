const Discord = require('discord.js');
const config = require('../config');
const sender = require('./TranscriptSender');
module.exports = async (bot, integration) => {
    const guild = integration.guild;
    const chan = guild.channels.cache;
    const name = `ticket-${integration.user.username}`;
    const check = chan.find(ch => ch.name === name && ch.type === Discord.ChannelType.GuildText && ch.topic === integration.user.id);

    const logChannel = chan.find(ch => ch.id === config.logs.tickets); 
    if (check) {
        const embed = new Discord.EmbedBuilder()
            .setTitle(`${integration.user.username} a fermé le tickets`)
            .setDescription("```diff\n-Ticket fermé "+name+"\n```\n Transcript envoie ")
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic : true})})
        await logChannel.send({ embeds: [embed] });
        const user = await bot.users.fetch(check.topic);
        await user.send("Votre ticket viens de fermé voici votre conversation du tickets")
        await sender(bot, check, guild)
        await check.delete()
    } else {
       
        await integration.reply("Une erreur ses produits.");

        if (logChannel) {
            await logChannel.send(`Le ticket pour ${integration.user.username} n'a pas été trouvé.`);
        } else {
            console.error("Le channel log n'a pas été trouvé.");
        }
    }
};
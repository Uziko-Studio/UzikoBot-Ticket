const Discord = require('discord.js');
const config = require('../config.js');
module.exports = async (bot, channel, interation, type) => {
    const guild = interation.guild;
    if (!guild) {
        console.error('Guild not found.');
        return;
    }
    
    const roles = guild.roles.cache;
    const chan = guild.channels.cache;
    
    const owner = roles.find(r => r.id === config.roles.owner);
    const admin = roles.find(r => r.id === config.roles.admin);
    const support = roles.find(r => r.id === config.roles.support);
    const t_support = roles.find(r => r.id === config.roles.t_support);
    
    if (!owner || !admin || !support || !t_support) {
        console.error('One or more roles not found.');
        return;
    }
    const logChannel = chan.find(ch => ch.id === config.logs.tickets); 
    const logstickets = new Discord.EmbedBuilder()
    .setTitle(`${interation.user.username} a ouvert un ticket tickets`)
    .setDescription("```diff\n+Ticket ouvert #ticket-"+interation.user.username+"\n```\n")
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic : true})})
    logChannel.send({embeds: [logstickets]})


    let btn_close = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
        .setCustomId("close-ticket")
        .setEmoji("❌")
        .setLabel("Fermer")
        .setStyle("Danger")
    )
    
    if(type === "paiment"){
        channel.send(`${interation.user} ${owner} ${admin}`)
        let embed = new Discord.EmbedBuilder()
        .setTitle(`Probleme de paiments`)
        .setDescription(`Merci de détailler le probleme. Nous ferrons de notre mieux pour vous aidé.`)
        .addFields(
            {name: 'Votre mail utiliser', value: 'exemple@example.com'},
            {name: 'ID de transaction', value: 'Vous le trouvée sur votre facture #1234567'},
            {name: 'Votre service', value: 'Quelle service avez vous prosedez le paiement'},
        )
        .setThumbnail(bot.user.displayAvatarURL({dynamic : true}))
        .setTimestamp()
        .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic : true})})

        channel.send({embeds: [embed], components: [btn_close]})

    }else if(type === "questions"){
        channel.send(`${interation.user} ${owner} ${admin} ${support} ${t_support}`)
        let embed = new Discord.EmbedBuilder()
        .setTitle(`Des question`)
        .setDescription(`Merci de détailler votre question. Nous serrons ravis de repondre`)
        .setThumbnail(bot.user.displayAvatarURL({dynamic : true}))
        .setTimestamp()
        .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic : true})})

        channel.send({embeds: [embed], components: [btn_close]})

    } else if(type === "services"){
        channel.send(`${interation.user} ${owner} ${admin} ${support} ${t_support}`)
        let embed = new Discord.EmbedBuilder()
        .setTitle(`Probleme lie a votre service`)
        .setDescription(`Merci de détailler votre probleme. Nous ferrons de notre mieux pour vous aidé.`)
        .addFields(
            {name: 'Votre mail utiliser', value: 'exemple@example.com'},
            {name: 'ID de votre service', value: 'Vous le trouvée sur votre dashboard vous allez sur manage et vous copier le numero apres service dans Url https://uziko.fr/service/```1```/manage'},
        )
        .setThumbnail(bot.user.displayAvatarURL({dynamic : true}))
        .setTimestamp()
        .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic : true})})

        channel.send({embeds: [embed], components: [btn_close]})
    }
}
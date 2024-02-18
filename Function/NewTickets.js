const Discord = require('discord.js');
const config = require('../config.js');
module.exports = async (bot, channel, integration, type) => {
    let btn_close = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
        .setCustomId("close-ticket")
        .setEmoji("❌")
        .setLabel("Fermer")
        .setStyle("Danger")
    )
    
    if(type === "paiment"){
        channel.send(`${integration.user} <@${config.roles.owner}> <@${config.roles.admin}>`)
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
        channel.send(`${integration.user} <@${config.roles.owner}> <@${config.roles.admin}> <@${config.roles.support}> <@${config.roles.t_support}>`)
        let embed = new Discord.EmbedBuilder()
        .setTitle(`Des question`)
        .setDescription(`Merci de détailler votre question. Nous serrons ravis de repondre`)
        .setThumbnail(bot.user.displayAvatarURL({dynamic : true}))
        .setTimestamp()
        .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic : true})})

        channel.send({embeds: [embed], components: [btn_close]})

    } else if(type === "services"){
        channel.send(`${integration.user} <@${config.roles.owner}> <@${config.roles.admin}> <@${config.roles.support}> <@${config.roles.t_support}>`)
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
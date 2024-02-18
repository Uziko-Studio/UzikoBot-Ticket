const fs = require("fs");
const Discord = require("discord.js")

module.exports = {

    name: "ticket",
    description: "ticket description",
    permissions: "null",
    dm : false,
    
    async run(bot, msg){
        let embed = new Discord.EmbedBuilder()
        .setColor("Aqua")
        .setTitle("Création de ticket")
        .setThumbnail(bot.user.displayAvatarURL({dynamic : true}))
        .setDescription('Clicker sur la catégorie pour crée un ticket')
        .addFields(
            {name: "📩 Des questions ?", value: "Vous avez des questions a nous possez. Nous pouvons les repondres. "},
            {name: "⚠️ Un probleme sur notre service?", value: "Un problème sur votre service. Contact nous pour un assistance. "},
            {name: "💲Probleme de paiement.", value: "Il y a eu un problème lors de votre paiement. "},
        )
        .setTimestamp()
        .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic : true})})

        const btn1 = new Discord.ActionRowBuilder().addComponents(new Discord.StringSelectMenuBuilder()
        .setCustomId("ticket-menu")
        .setPlaceholder("Choisissez une Categories...")
        .addOptions([
            {
                label: "📩 Des questions ?",
                value: "ticket-question"
            },
            {
                label: "⚠️ Un problem sur notre service?",
                value: "ticket-service"
            },
            {
                label: "💲Probleme de paiement.",
                value: "ticket-paiement"
            }
        ])
        )

    await msg.reply({embeds: [embed], components: [btn1]})
    }
}
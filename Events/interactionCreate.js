const Discord = require('discord.js')

module.exports = async (bot, interation) => {
    if (interation.type === Discord.InteractionType.ApplicationCommand) {
    let command = require(`../Commands/${interation.commandName}`)
    command.run(bot, interation, command.options)
    }
}
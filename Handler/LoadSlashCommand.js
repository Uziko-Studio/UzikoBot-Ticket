const Discord = require('discord.js')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord.js')


module.exports = async bot => {
    console.log("================ LOADING SLASH COMMANDS ================")
    let commands = []
    bot.commands.forEach(async cmd => {
        let Slashcmd = new Discord.SlashCommandBuilder()
        .setName(cmd.name)
        .setDescription(cmd.description)
        .setDMPermission(cmd.dm)
        .setDefaultMemberPermissions(cmd.permissions === 'null' ? null : cmd.permissions)

        if(cmd.options?.length >= 1) {
            for (let i = 0; i < cmd.options.length; i++){
                Slashcmd[`add${cmd.options[i].type.slice(0,1).toLowerCase() + cmd.options[i].type.slice(1 , cmd.options[i].type.length)}Option`](options => options.setName(cmd.options[i].name).setDescription(cmd.options[i].description).setRequired(cmd.options[i].required))
            }
        }
        await commands.push(Slashcmd)
        console.log(`Slash command ${cmd.name} added`)
    })
    const rest = new REST({version: 10}).setToken(bot.token)

    await rest.put(Routes.applicationCommands(bot.user.id), {body: commands})
    console.log(`ALL Slash command added`)
}
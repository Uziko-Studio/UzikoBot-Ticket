const Discord = require('discord.js');
const LoadSlashCommand = require('../Handler/LoadSlashCommand')

module.exports = async bot => {

    await LoadSlashCommand(bot)


    console.log('================================')
    console.log(`${bot.user.tag} Is online`)
    console.log("Ready!") // Do not touch this is for the panel to tell is online
    console.log('================================')
}
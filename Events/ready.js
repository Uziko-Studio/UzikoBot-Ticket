const Discord = require('discord.js');
const LoadSlashCommand = require('../Handler/LoadSlashCommand')
const version = require('../package-lock.json')
const path = require('path');
const data = path.join(__dirname, '..', 'Data');
const fs = require('fs');

module.exports = async bot => {
    if (!fs.existsSync(data)) {
        fs.mkdirSync(data);
    }
    try {
        await LoadSlashCommand(bot);
        
        const activityMessage = `Gére les tickets | ${version.version}`;
        await bot.user.setActivity(activityMessage, { type: Discord.ActivityType.Watching });

        console.log('================================');
        console.log(`${bot.user.tag} Is online`);
        console.log('Ready!'); // Assurez-vous que la chaîne de caractères est correcte
        console.log('================================');
    } catch (error) {
        console.error('Error during bot initialization:', error);
    }
}
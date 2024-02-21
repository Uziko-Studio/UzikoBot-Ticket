const fs = require('fs');
const path = require('path');
const config = require('../config');
module.exports = async (bot, channel,guild) => {
    try {
        // Chemin du fichier à envoyer
        const filePath = path.join(__dirname, '..', 'Data', `transcript_${channel.id}.txt`);
        
        // Vérifiez si le fichier existe
        if (!fs.existsSync(filePath)) {
            throw new Error('Le fichier spécifié n\'existe pas.');
        }
        const log = guild.channels.cache.find(ch => ch.id === config.logs.tickets);
        const user = await bot.users.fetch(channel.topic);
        await user.send({
            files: [{
                attachment: filePath,
                name: `transcript_${channel.id}.txt`
            }]
        });
        await log.send({
            files: [{
                attachment: filePath,
                name: `transcript_${channel.id}.txt`
            }]
        });
        fs.unlinkSync(filePath);
    } catch (error) {
        console.error('Erreur lors de l\'envoi du fichier :', error.message);
    }
}
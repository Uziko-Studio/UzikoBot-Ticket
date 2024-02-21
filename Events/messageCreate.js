const Discord = require('discord.js');
const config = require('../config');
const path = require('path');
const data = path.join(__dirname, '..', 'Data');
const fs = require('fs');

module.exports = async (bot, message) => {
    if (message.channel && message.channel.name && message.channel.name.startsWith('ticket-')) {
        const transcriptFile = path.join(data, `transcript_${message.channel.id}.txt`);
        fs.appendFileSync(transcriptFile, `${message.author.tag}: ${message.content}\n`);
    } else {
        return;
    }
}
const Discord = require('discord.js')
const Tpopen = require('../Function/TicketPaimentOpen')
const Tqopen = require('../Function/TicketQuestionOpen')
const Tsopen = require('../Function/TicketServiceOpen')
const close = require('../Function/CloseTickets')
const config = require('../config')

module.exports = async (bot, interation) => {
  const guild = interation.guild;
  const chan = guild.channels.cache;

    if (interation.type === Discord.InteractionType.ApplicationCommand) {
    let command = require(`../Commands/${interation.commandName}`)
    command.run(bot, interation, command.options)
    }
    if (!interation.isButton) return;
    if (interation.customId === "close-ticket") {
      close(bot, interation)
    }

    if (!interation.isStringSelectMenu()) return;
    const user = interation.user;
    const channel = interation.channel;
    const messageId = interation.message.id;
  
    const selectedOption = interation.values[0];
  
    // Réinitialisation du menu déroulant pour l'utilisateur
    const newMessage = await channel.messages.fetch(messageId);
    const newComponents = newMessage.components.map(component => {
      if (component.type === 'ACTION_ROW') {
        const selectMenu = component.components.find(comp => comp.type === 'SELECT_MENU');
        if (selectMenu) {
          selectMenu.setDisabled(true);
        }
      }
      return component;
    });
  
    await newMessage.edit({ components: newComponents });
    if (selectedOption === 'ticket-question') {
        Tqopen(bot, interation)
      
    } else if (selectedOption === 'ticket-service') {
        Tsopen(bot, interation)

    } else if (selectedOption === 'ticket-paiement') {
        Tpopen(bot, interation)

    }
}
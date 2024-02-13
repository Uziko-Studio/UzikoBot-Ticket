const fs = require('fs')

module.exports =  async bot => {

    fs.readdirSync("./Commands").filter(f => f.endsWith(".js")).forEach(f => {
        
        let command = require(`../Commands/${f}`)
        if(!command.name || typeof command.name !== "string") throw new TypeError("Invalid command name at file " + f.name + ".")
        bot.commands.set(command.name, command)
        console.log(`Command: ${command.name} is loaded`)
    })
}
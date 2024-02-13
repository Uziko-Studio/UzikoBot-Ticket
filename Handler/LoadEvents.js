const { Console } = require('console');
const fs = require('fs');

module.exports = async bot =>{

    fs.readdirSync('./Events').filter(f => f.endsWith('.js')).forEach(async f =>{

        let event = require(`../Events/${f}`)
        bot.on(f.split(".js").join(""), event.bind(null, bot))
        console.log(`Event: ${f} is loaded`);
    })
}
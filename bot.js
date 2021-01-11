const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(Nzk3OTA3MDI0MzU2NTczMjI0.X_tS0w.CDjxFq_qeZMrK8Y3l37lllxPCzM);

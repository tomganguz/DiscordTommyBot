/*
  TEST BOT DI TOMMY
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = '<TOKEN>';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('[INFO] Tommybot pronto');
  client.user.setActivity('YEA BOI');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!tommybot') {
    // Send "pong" to the same channel
    message.channel.send('**TOMMYBOT V.01** \n\n `!mioavatar` URL del tuo avatar discord \n `!test` Messagio di test del bot');
  }

  if (message.content === '!test') {
    // Send "pong" to the same channel
    // message.channel.reply('**[INFORMAZIONE FONDAMENTALE]** `ALE È LEZZO`');
    message.reply('**[INFORMAZIONE FONDAMENTALE]** `ALE È LEZZO`');
  }

  if (message.content === '!mioavatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});
// Log our bot in
client.login(token);

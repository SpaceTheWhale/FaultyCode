//Who's That Pokemon Discord Bot

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

require('dotenv').config();

//Set .env vars
const serverID = process.env.SERVERID;
const channelID = process.env.CHANNELID;

// Login to Discord with your client's token
client.login(process.env.token);

// When the client is ready, run this code (only once)
client.once('ready', botReady);

function botReady() {
    console.log('Bot is ready!');
}



client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.content === '!WDP') {
        msg.reply('Incoming Pokemon');
    }

}



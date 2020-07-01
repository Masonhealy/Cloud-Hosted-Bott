const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzI3NzMyMjI4ODQ2NjQ5MzU1.XvwVZw.JZaqncES1Fo9J4txhOEoSmCwuYg';

bot.on('ready', () =>{
    console.log('The BOT is online!');
})

bot.login(token);
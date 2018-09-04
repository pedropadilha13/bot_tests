var config = require('./private/config');
const TelegramBot = require('node-telegram-bot-api');
const token = config.apikey;
const bot = new TelegramBot(token, {polling: true});

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    bot.sendMessage('634613531', chunk);
  }
  process.stdin.resume();
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  console.log('msg:', msg);
  console.log('match:', match);
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log('msg', msg);
  bot.sendMessage(chatId, 'Received your message');
});
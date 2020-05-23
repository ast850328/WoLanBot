'use strict';
require('dotenv').config();
const rules = require('./rules.json');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, {polling: true});

bot.on('message', (msg: any) => {
  const chatId = msg.chat.id;
  const msgId = msg.message_id;
  let message = msg.text;
  let response = '';
  for (let key of Object.keys(rules)) {
    if (message === key) {
      response = rules[key];
      break;
    }
  }
  if (response === '') {
    response = '我爛';
  }

  bot.sendMessage(chatId, response, {reply_to_message_id: msgId});
});

require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, {polling: true});

bot.on('message', (msg: any) => {
  const chatId = msg.chat.id;
  const msgId = msg.message_id;
  let message = msg.text;
  let response = ''
  if (message == '/start') {
    response = '您好，歡迎來取暖，我爛'
  } else if (message == '/help') {
    response = '我可以為您取暖'
  } else if (message.includes('我爛')) {
    response = '我才爛';
  } else if (message.includes('我才爛')) {
    response = '我更爛';
  } else if (message.includes('我更爛')) {
    response = '我超爛';
  } else if (message.includes('我超爛')){
    response = '我最爛';
  } else if (message.includes('我最爛')){
    response = '我比你爛';
  } else if (message.includes('我比你爛')){
    response = '我比你更爛';
  } else {
    response = '我爛';
  }
  bot.sendMessage(chatId, response, {reply_to_message_id: msgId});
});

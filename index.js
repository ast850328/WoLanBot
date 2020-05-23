'use strict';
require('dotenv').config();
var rules = require('./rules.json');
var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(process.env.TOKEN, { polling: true });
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    var msgId = msg.message_id;
    var message = msg.text;
    var response = '';
    for (var _i = 0, _a = Object.keys(rules); _i < _a.length; _i++) {
        var key = _a[_i];
        if (message === key) {
            response = rules[key];
            break;
        }
    }
    if (response === '') {
        response = '我爛';
    }
    bot.sendMessage(chatId, response, { reply_to_message_id: msgId });
});

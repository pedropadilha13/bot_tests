'use strict';
var config = require('./private/config');
const TelegramBot = require('node-telegram-bot-api');
const token = config.api.key;
const bot = new TelegramBot(token, {polling: true});
const Database = require('./assets/Database');
var script = require('./assets/script');

process.stdin.setEncoding('utf-8');

bot.on('message', (msg) => {
	const chatId = msg.chat.id;
	console.log('New message:');
	console.log(`  From: ${msg.from.first_name} ${msg.from.last_name}, id: ${chatId}`);
	console.log(`  Message content: ${msg.text}`);
	//bot.sendMessage(chatId, 'Received your message');
});

bot.onText(/\/join/, (msg, match) => {
	let chatId = msg.chat.id;
	let name = `${msg.from.first_name || ''} ${msg.from.last_name || ''}`;
	let args = match.splice(0, 1);
	console.log(`id: ${chatId}, name: ${name}`);

	if (script.personExists(chatId)) {
		bot.sendMessage(chatId, 'Você já está cadastrado!');
	} else {
		bot.sendMessage(chatId, 'Você ainda não está cadastrado, vamos lá!');
		//cadastrar......
	}

});

bot.onText(/\/start/, (msg, match) => {
	let chatId = msg.chat.id;
	let firstName = msg.from.first_name;
	let lastName = msg.from.last_name;
	var name = "";
	if (!script.isNull(first_name)) {
		name += first_name;
	}
	if (!script.isNull(last_name)) {
		name += last_name;
	}
	console.log(name);
	let response = 'Olá' + (name.length > 0 ? (name + "!") : "!") + '\nSeja bem vindo ao sistema de notificações da Bandtec!\nPara receber ajuda, envie /help!';
	console.log(response);
	//bot.sendMessage(chatId, response);
});

process.stdin.on('readable', () => {
	let chunk = process.stdin.read();
	if (chunk !== null) {
		let cs = chunk.split(" ");
		let fw = cs[0];
		if (fw[0] === "/") {
			switch(fw) {
				case "/sayId":
					let id = cs[1];
					if (!isNaN(Number(id))) {
						cs.splice(0, 2);
						bot.sendMessage(id, cs.join(" "));
						break;
					}
				case "/say":
					cs.splice(0, 1);
					bot.sendMessage(config.pedropadilha13.telegram_id, cs.join(" "));
					break;
			}
		}
	}
	process.stdin.resume();
});

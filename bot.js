process.on('unhandledRejection', e => console.error(e));
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = process.env.TOKEN;

const pooWords = ['merde', 'chier', 'caca'];
const eggplantWords = ['pipi', 'bite', 'queue', 'paf', 'paff'];

client.once('ready', () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

  if (pooWords.some(word => content.includes(word))) {
    message.react('💩').catch(console.error);
  }

  if (eggplantWords.some(word => content.includes(word))) {
    message.react('🍆').catch(console.error);
  }
});

client.login(TOKEN);

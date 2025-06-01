const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Serveur web minimal pour Render
app.get('/', (req, res) => {
  res.send('Bot en ligne');
});
app.listen(PORT, () => {
  console.log(`Serveur web lancé sur le port ${PORT}`);
});

// Gestion des erreurs non gérées
process.on('unhandledRejection', e => console.error('Erreur non gérée :', e));

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
// Anti-sleep ping toutes les 5 minutes
setInterval(() => {
  require("http").get("https://dashboard.render.com/web/srv-d0trnbje5dus7387dcm0/deploys/dep-d0u2njm3jp1c73fa9sl0?r=2025-06-01%4010%3A29%3A39%7E2025-06-01%4010%3A32%3A24");
}, 5 * 60 * 1000); // 5 minutes

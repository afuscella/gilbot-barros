import Discord from 'discord.js'

export function BotClient(DiscordModule = Discord) {
  const TOKEN = process.env.TOKEN;
  const bot = new DiscordModule.Client();

  bot.login(TOKEN);

  bot.on('ready', () => {
    if (bot?.user) {
      console.info(`Logged in as ${bot.user.tag}!`);
    }
  });

  bot.on('message', ({ content, channel }) => {
    if (content.startsWith('leao')) {
      channel.send('hello');
    }
  });

  return {

  }
}

import Discord from 'discord.js';

export function BotClient(DiscordModule = Discord) {
  const { TOKEN } = process.env;
  const bot = new DiscordModule.Client();

  bot.login(TOKEN);

  bot.on('ready', () => {
    if (bot?.user) {
      // eslint-disable-next-line no-console
      console.info(`Logged in as ${bot.user.tag}!`);
    }
  });

  bot.on('message', async ({ content, member, channel }) => {
    if (content.startsWith('leao')) {
      if (member?.voice.channel) {
        await member.voice.channel.join();
      }
      channel.send('Vai DJ!');
    }
  });

  return {

  };
}

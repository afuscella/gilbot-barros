import { EnvironmentConfig } from './infra/env/Environment';
import { BotClient } from './infra/bot/DiscordClient';

EnvironmentConfig.setup();
const bot = BotClient();

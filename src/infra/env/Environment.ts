import dotenv from 'dotenv'

export const EnvironmentConfig = {
  setup(DotEnvModule = dotenv) {
    const result = DotEnvModule.config();
    if (result.error) {
      throw new Error('Could not initialize local environment');
    }
  },
};

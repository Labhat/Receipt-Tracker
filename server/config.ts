import 'dotenv/config';

export const config = {
  port: Number(process.env.PORT ?? 3000),
  geminiModel: process.env.GEMINI_MODEL ?? 'gemini-3.8-flash',
  jwtSecret: process.env.JWT_SECRET ?? 'dev-secret-change-me',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET ?? 'dev-refresh-secret-change-me',
  mongoUri: process.env.MONGO_URI ?? 'mongodb://localhost:27017/receipt_tracker',
  appUrl: process.env.APP_URL ?? 'http://localhost:3000',
  nodeEnv: process.env.NODE_ENV ?? 'development',
};

export default config;

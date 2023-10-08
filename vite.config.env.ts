const $env = {
  IS_DEV: process.env.NODE_ENV === 'development',

  // Frontend
  URL: process.env.URL!,
  APP_ID: 'app',

  // API
  API_URL: process.env.API_URL!,

  // Database
  DATABASE_URL: process.env.DATABASE_URL!,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME!,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD!,

  // Web Push
  VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY!,
  VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY!,
  VAPID_EMAIL: process.env.VAPID_EMAIL!,
} as const;

interface $InternalEnv {
  NODE_ENV: 'development' | 'production';
  PWD: string;
}

type $ExternalEnv = typeof $env;

declare global {
  const $env: $InternalEnv & $ExternalEnv;
}

export default $env;

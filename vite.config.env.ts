export function getEnv(env: Record<string, string>) {
  return {
    IS_DEV: env.NODE_ENV === 'development',

    // Frontend
    APP_ID: 'app',

    // API
    KUBOSTON_KEY: env.KUBOSTON_KEY,
  } as const;
}

interface $InternalEnv {
  NODE_ENV: 'development' | 'production';
  PWD: string;
}

type $ExternalEnv = ReturnType<typeof getEnv>;

declare global {
  const $env: $InternalEnv & $ExternalEnv;
}

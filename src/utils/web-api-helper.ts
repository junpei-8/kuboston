import { IS_CLIENT } from '@/constants/environment';

export const Audio = IS_CLIENT
  ? window.Audio
  : (class Audio {} as typeof window.Audio);

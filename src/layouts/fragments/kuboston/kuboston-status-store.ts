import { createSignal } from 'solid-js';
import type { KubostonEmotion } from '@/api/kuboston';
import { Audio } from '@/utils/web-api-helper';
import AngerFaceImageMeta from './images/anger.png';
import ConfusionFaceImageMeta from './images/confusion.png';
import FearFaceImageMeta from './images/fear.png';
import HappinessFaceImageMeta from './images/happiness.png';
import JoyFaceImageMeta from './images/joy.png';
import NormalFaceImageMeta from './images/normal.png';
import AngerVoiceSoundPath from './sounds/anger.mp3';
import ConfusionVoiceSoundPath from './sounds/confusion.mp3';
import FearVoiceSoundPath from './sounds/fear.mp3';
import HappinessVoiceSoundPath from './sounds/happiness.mp3';
import JoyVoiceSoundPath from './sounds/joy.mp3';
import ThinkingVoiceSoundPath from './sounds/thinking.mp3';
// import SadnessVoiceSoundPath from './sounds/sadness.mp3';
// import SadnessFaceImagePath from './images/sadness.png';

export type ExternalKubostonEmotion = KubostonEmotion | 'normal';

export const defaultKubostonEmotion: ExternalKubostonEmotion = 'normal';

export type KubostonStatus = {
  emotion: ExternalKubostonEmotion;
  voice: HTMLAudioElement;
  face: ImageMetadata;
};

export const kubostonStatusMap = {
  anger: {
    emotion: 'anger',
    voice: new Audio(AngerVoiceSoundPath),
    face: AngerFaceImageMeta,
  },
  confusion: {
    emotion: 'confusion',
    voice: new Audio(ConfusionVoiceSoundPath),
    face: ConfusionFaceImageMeta,
  },
  fear: {
    emotion: 'fear',
    voice: new Audio(FearVoiceSoundPath),
    face: FearFaceImageMeta,
  },
  happiness: {
    emotion: 'happiness',
    voice: new Audio(HappinessVoiceSoundPath),
    face: HappinessFaceImageMeta,
  },
  joy: {
    emotion: 'joy',
    voice: new Audio(JoyVoiceSoundPath),
    face: JoyFaceImageMeta,
  },
  normal: {
    emotion: 'normal',
    voice: new Audio(ThinkingVoiceSoundPath),
    face: NormalFaceImageMeta,
  },
  // sadness: {
  //   emotion: 'sadness',
  //   voice: new Audio(SadnessVoiceSoundPath),
  //   face: SadnessFaceImagePath,
  // },
} as const satisfies Record<ExternalKubostonEmotion, KubostonStatus>;

const [get, set] = createSignal<KubostonStatus>(
  kubostonStatusMap[defaultKubostonEmotion],
);

export const kubostonStatusStore = {
  get,

  change(emotion: ExternalKubostonEmotion) {
    // ステータスを取得
    const status = kubostonStatusMap[emotion];

    // ステータスを変更
    set(status);

    // 音声を再生
    status.voice.play();
  },
};

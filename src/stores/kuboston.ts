import { createSignal } from 'solid-js';
import { askKuboston } from '@/api/kuboston';
import type {
  KubostonRequestBodyMessage,
  KubostonResponseBody,
} from '@/api/kuboston';
import { kubostonStatusStore } from '@/layouts/fragments/kuboston/kuboston-status-store';
import ThinkingVoiceSoundPath from '@/layouts/fragments/kuboston/sounds/thinking.mp3';
import { Audio } from '@/utils/web-api-helper';

export type KubostonStoreRequestMessage = {
  request: KubostonRequestBodyMessage;
  response: null;
};
export type KubostonStoreRespondMessage = {
  request: null;
  response: KubostonResponseBody;
};

export type KubostonStoreMessage =
  | KubostonStoreRequestMessage
  | KubostonStoreRespondMessage;

const [getQuestion, setQuestion] = createSignal<string>('');
const [getHasQuestioned, setHasQuestioned] = createSignal<boolean>(false);
const [getIsQuestioning, setIsQuestioning] = createSignal<boolean>(false);
const [getMessages, setMessages] = createSignal<KubostonStoreMessage[]>([]);
const requestMessages: KubostonRequestBodyMessage[] = [];

const KubostonEmotionAudio = new Audio(ThinkingVoiceSoundPath);

function playThinkingVoice() {
  KubostonEmotionAudio.play();
}

export const kubostonStore = {
  getQuestion,
  setQuestion,

  getHasQuestioned,
  getIsQuestioning,
  getMessages,

  async question() {
    const question = getQuestion();

    // メッセージを追加する
    setMessages((messages) => [
      ...messages,
      {
        request: {
          role: 'user',
          content: question,
        },
        response: null,
      },
    ]);

    // リクエストを追加する
    requestMessages.push({ role: 'user', content: question });

    // 送信時に入力欄をクリアする
    setQuestion('');

    // チャットページに遷移
    setHasQuestioned(true);

    // 質問中フラグを立てる
    setIsQuestioning(true);

    // 考えている時のボイスを流す
    playThinkingVoice();
    const clearRepeatPlayingVoiceKey = setInterval(playThinkingVoice, 4000);

    try {
      // リクエストを送信する
      const { answer, rawAnswer } = await askKuboston(requestMessages);

      // Kuboston の表情を変更する
      kubostonStatusStore.change(answer.emotion);

      // Kuboston 回答を保存する
      requestMessages.push({ role: 'assistant', content: rawAnswer });

      // メッセージを追加する
      setMessages((messages) => [
        ...messages,
        {
          request: null,
          response: answer,
        },
      ]);
    } finally {
      // ボイスをリピート再生するインターバルをクリアする
      clearInterval(clearRepeatPlayingVoiceKey);

      // 質問中フラグを下ろす
      setIsQuestioning(false);
    }
  },
} as const;

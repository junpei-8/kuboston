import { createSignal } from 'solid-js';
import { askKuboston } from '@/api/kuboston';
import type {
  KubostonRequestBodyMessage,
  KubostonResponseBody,
} from '@/api/kuboston';
import { kubostonStatusStore } from '@/layouts/fragments/kuboston/kuboston-status-store';

export type KubostonStoreQuestionMessage = {
  request: KubostonRequestBodyMessage;
  response: null;
};
export type KubostonStoreRequestingMessage = {
  request: null;
  response: null;
  isLoadingResponse: true;
};
export type KubostonStoreRespondMessage = {
  request: null;
  response: KubostonResponseBody;
  isLoadingResponse: false;
};

export type KubostonStoreMessage =
  | KubostonStoreQuestionMessage
  | KubostonStoreRequestingMessage
  | KubostonStoreRespondMessage;

const [getQuestion, setQuestion] = createSignal<string>('');
const [getIsQuestioning, setIsQuestioning] = createSignal<boolean>(false);
const [getMessages, setMessages] = createSignal<KubostonStoreMessage[]>([]);
const requestMessages: KubostonRequestBodyMessage[] = [];

export const kubostonStore = {
  getQuestion,
  setQuestion,

  getIsQuestioning,
  getMessages,

  async question() {
    const question = getQuestion();

    const responseMessage: KubostonStoreRequestingMessage = {
      request: null,
      response: null,
      isLoadingResponse: true,
    };

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
      responseMessage,
    ]);

    // リクエストを追加する
    requestMessages.push({ role: 'user', content: question });

    // 送信時に入力欄をクリアする
    setQuestion('');

    // 質問中フラグを立てる
    setIsQuestioning(true);

    try {
      // リクエストを送信する
      const { data, rawData } = await askKuboston(requestMessages);

      // Kuboston の表情を変更する
      kubostonStatusStore.change(data.emotion);

      // Kuboston 回答を保存する
      requestMessages.push({ role: 'assistant', content: rawData });

      // メッセージを更新する
      setMessages((messages) => {
        const respondMessage = messages[
          messages.length - 1
        ] as KubostonStoreRespondMessage;

        respondMessage.response = data;
        respondMessage.isLoadingResponse = false;

        console.log(respondMessage);

        return [...messages];
      });
    } finally {
      // 質問中フラグを下ろす
      setIsQuestioning(false);
    }
  },
} as const;

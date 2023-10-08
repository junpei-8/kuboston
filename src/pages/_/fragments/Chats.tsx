import { createSignal, For } from 'solid-js';
import css from './Chats.css';

function Chats() {
  //** チャットデータ */
  const [chatsDatas, setChatDatas] = createSignal([
    { text: 'こんにちは' },
    { text: 'おはようございます' },
    { text: '元気ですか？' },
    { text: 'はい、元気です。ありがとう！' },
    { text: '今日の天気はどうですか？' },
    { text: '天気予報によれば、今日は晴れだそうです。' },
    { text: '何か楽しいことを計画していますか？' },
    { text: '今晩友達と映画を見る予定です。' },
    {
      text: '最近読んだ面白い本がありますか？おすすめの本があれば教えてください。',
    },
    {
      text: 'はい、最近「村上春樹の1Q84」という小説を読みました。非常に面白かったです。',
    },
  ]);

  // chatGPTに送信

  return (
    <div>
      <ul class={css.chat}>
        <For each={chatsDatas()}>
          {(item, index) => (
            <li class={index() % 2 === 0 ? css.sources : css.message}>
              {item.text}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

export default Chats;

import { For } from 'solid-js';
import { kubostonStore } from '@/stores/kuboston';
import css from './Chats.css';

function Chats() {
  return (
    <ul class={css.chat}>
      <For each={kubostonStore.getMessages()}>
        {(message) =>
          message.request ? (
            <li class={css.sources}>{message.request.content}</li>
          ) : (
            <li class={css.message}>{message.response.text}</li>
          )
        }
      </For>
      <div hidden={!kubostonStore.getIsQuestioning()}>...</div>
    </ul>
  );
}

export default Chats;

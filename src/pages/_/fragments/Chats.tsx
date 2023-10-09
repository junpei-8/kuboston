import { For } from 'solid-js';
import { kubostonStore } from '@/stores/kuboston';
import css from './Chats.css';

function Chats() {
  return (
    <div>
      <ul class={css.chat}>
        <For each={kubostonStore.getMessages()}>
          {(message) =>
            message.request ? (
              <li class={css.sources}>{message.request.content}</li>
            ) : message.isLoadingResponse ? (
              <li class={css.loading}>...</li>
            ) : (
              <li class={css.message}>{message.response.text}</li>
            )
          }
        </For>
      </ul>
    </div>
  );
}

export default Chats;

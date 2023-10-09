import type { VoidProps } from 'solid-js';
import { kubostonStore } from '@/stores/kuboston';
import type QuestionTextFieldCss from './QuestionTextField.css';

type Props = VoidProps<{
  css: typeof QuestionTextFieldCss;
}>;

export default function QuestionTextField(props: Props) {
  function onSubmit(event: Event) {
    event.preventDefault();
    kubostonStore.question();
  }

  function onInputTextarea(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    kubostonStore.setQuestion(target.value);
  }

  return (
    <form class={props.css.container} onSubmit={onSubmit}>
      <textarea
        class={props.css.fieldText}
        placeholder="メッセージの入力"
        value={kubostonStore.getQuestion()}
        onChange={onInputTextarea}
      />
      <button
        class={props.css.submitButton}
        type="submit"
        disabled={kubostonStore.getIsQuestioning()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="astro-J7PV25F6"
        >
          <title>Send</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.64161 2.18531C6.04591 2.14469 6.453 2.22818 6.80868 2.42468L6.81379 2.4275L27.9217 14.25L27.9244 14.2515C28.2358 14.4244 28.4954 14.6774 28.6764 14.9842C28.8578 15.292 28.9535 15.6427 28.9535 16C28.9535 16.3572 28.8578 16.708 28.6764 17.0157C28.4954 17.3226 28.2358 17.5756 27.9244 17.7485L27.9217 17.75L6.80869 29.5753C6.45301 29.7718 6.04591 29.8553 5.64161 29.8147C5.2373 29.774 4.85495 29.6112 4.54548 29.3479C4.236 29.0846 4.01408 28.7332 3.90925 28.3406C3.80455 27.9485 3.82162 27.5338 3.95818 27.1517L7.93379 16L3.95868 4.84968C3.82192 4.46735 3.8045 4.05166 3.90925 3.65933C4.01408 3.26675 4.236 2.9154 4.54548 2.65208C4.85496 2.38875 5.2373 2.22594 5.64161 2.18531ZM27.4376 15.125L26.9489 15.9975L5.84155 4.17529L5.84205 4.17668L9.8113 15.3106C9.98396 15.7539 9.98396 16.246 9.8113 16.6894L5.84155 27.8247L26.9489 16.0025L26.9535 16L27.4376 15.125Z"
            fill="currentColor"
            class="astro-J7PV25F6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 16C8 15.4477 8.44772 15 9 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H9C8.44772 17 8 16.5523 8 16Z"
            fill="currentColor"
            class="astro-J7PV25F6"
          />
        </svg>
      </button>
    </form>
  );
}

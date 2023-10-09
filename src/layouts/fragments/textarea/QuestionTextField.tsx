import type { VoidProps } from 'solid-js';
import { kubostonStore } from '@/stores/kuboston';
import type QuestionTextFieldCss from './QuestionTextField.css';

type Props = VoidProps<{
  css: typeof QuestionTextFieldCss;
  onSubmit: (uuid: string) => void;
}>;

export default function QuestionTextField(props: Props) {
  function onSubmit(event: Event) {
    event.preventDefault();
    kubostonStore.question();
    props.onSubmit?.(crypto.randomUUID());
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
        <slot name="submit-icon" />
      </button>
    </form>
  );
}

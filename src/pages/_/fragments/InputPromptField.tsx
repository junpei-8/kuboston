import { createSignal } from 'solid-js';
import css from './Prompt.css';

type PromptProps = {
  onChange: (e: Event) => void;
};

const InputPromptField = (props: PromptProps) => {
  const { onChange } = props;
  const [value, setValue] = createSignal('');

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    setValue(target.value);
    onChange(e);
  };

  return (
    <textarea
      class={css.InputPromptFieldText}
      placeholder="メッセージの入力"
      value={value()}
      onInput={handleInputChange}
    />
  );
};

export default InputPromptField;

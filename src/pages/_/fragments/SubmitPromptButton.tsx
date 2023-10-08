import type { JSXElement } from 'solid-js';
import css from './Prompt.css';

type ButtonProps = {
  onClick: () => void;
  submitIcon?: JSXElement;
};

export default function SubmitPromptButton(props: ButtonProps) {
  return (
    <div class={css.SubmitPromptButton}>
      <button class={css.SubmitPromptButtonButton} onClick={props.onClick}>
        {props.submitIcon}
      </button>
    </div>
  );
}

import { createSignal } from 'solid-js';
import type { FlowProps, JSX } from 'solid-js';
import InputPromptField from './InputPromptField';
import css from './Prompt.css';
import SubmitPromptButton from './SubmitPromptButton';

type Props = FlowProps<{
  submitIcon?: JSX.Element;
}>;

export default function PromptInputContainer(props: Props) {
  const [prompt, setPrompt] = createSignal('');

  const setPromptCallback = (e: any) => {
    setPrompt(e.target.value);
    console.log('changed ' + e.target.value);
  };

  const submitBtnTappedCallBack = () => {
    console.log('tapped ' + prompt());
  };

  return (
    <div class={css.PromptInputContainer}>
      <InputPromptField onChange={setPromptCallback} />
      <SubmitPromptButton
        submitIcon={props.submitIcon}
        onClick={submitBtnTappedCallBack}
      />
    </div>
  );
}

//stickyあり
//html これを置き換え
/* <div className='stickyContainer'>
    <div className='PromptInputContainer'>
        <InputPromptField />
        <SubmitPromptButton />
    </div>
</div> */

//css - これを追加
/* .stickyContainer{
    position: sticky;
    bottom: 0;
} */

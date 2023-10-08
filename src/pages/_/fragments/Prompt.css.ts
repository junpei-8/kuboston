import { css, style } from '@/styles';

export default css.instantiate(
  class {
    PromptInputContainer = style({
      position: 'relative',
      display: 'flex',
      width: '80%',
      height: '100px',
      margin: '0 auto',
    });

    InputPromptFieldText = style({
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      padding: '1rem',
      paddingRight: '68px',
      fontSize: '1.25rem',
      color: 'rgb(255, 255, 255)',
      resize: 'none',
      backgroundColor: '#24262C',
      border: '#23262d solid 2px',
      borderRadius: '20px 20px 0 0',

      ':focus': {
        border: 'white solid 1px',
        outline: 'none',
      },
    });

    SubmitPromptButton = style({
      position: 'absolute',
      top: '19px',
      right: '19px',
    });

    SubmitPromptButtonButton = style({
      width: '2.5rem',
      height: '2.5rem',
      padding: '6px',
      color: 'white',
      background: 'linear-gradient(to left, #4347FD, #AF51EF)',
      border: '#2c3036 solid 2px',
      borderRadius: '50%',
    });

    SubmitPromptButtonButtonHover = style({
      border: 'white solid 2px',
    });

    SubmitPromptButtonButtonActive = style({
      color: 'rgb(142, 142, 142)',
      backgroundColor: '#2362b9',
      border: '#010202 solid 2px',
      borderRadius: '100px',
    });
  },
);

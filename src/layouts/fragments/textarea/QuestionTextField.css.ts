import { css, style } from '@/styles';

export default css.instantiate(
  class {
    container = style({
      position: 'sticky',
      bottom: 0,
      boxSizing: 'border-box',
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      width: '80%',
      maxWidth: '900px',
      height: '80px',
      padding: '16px',
      margin: '0 auto',
      overflow: 'hidden',
      backgroundColor: '#24262C',
      border: '#23262d solid 2px',
      borderRadius: '20px 20px 0 0',

      ':focus': {
        border: 'white solid 1px',
        outline: 'none',
      },
    });

    fieldText = style({
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      fontSize: '1.25rem',
      color: 'rgb(255, 255, 255)',
      resize: 'none',
      backgroundColor: 'inherit',
      border: 'none',
      outline: 'none',
    });

    submitButton = style({
      width: '2.4rem',
      height: '2.4rem',
      padding: '8px',
      color: 'rgb(142, 142, 142)',
      background: 'linear-gradient(to left, #4347FD, #AF51EF)',
      border: '#2c3036 solid 2px',
      borderRadius: '50%',

      ':hover': {
        color: 'white',
      },
    });
  },
);

import { css, keyframes, style } from '@/styles';

export default css.instantiate(
  class {
    container = style({
      paddingTop: '24px',
    });

    floatAnimation = keyframes({
      '0%': {
        transform: 'translateY(0px)',
      },
      '100%': {
        transform: 'translateY(0px)',
      },
      '50%': {
        transform: 'translateY(20px)',
      },
    });

    face = style({
      position: 'sticky',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 10,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 184,
      height: 140,
      margin: '0 auto',
      marginBottom: '16px',
      background:
        'conic-gradient(from -24deg at 50% 50%, #3245ff 0deg, #bc52ee 102deg, #4af2c8 150deg, #4af2c8 200deg, #3245ff 360deg)',
      borderRadius: 16,
      animation: `${this.floatAnimation} 4000ms infinite ease-in-out`,

      ':before': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        content: '',
        background: 'inherit',
        filter: 'blur(12px)',
      },
    });

    smallFace = style({
      width: 96,
      height: 72,
      marginBottom: '8px',
    });

    faceImage = style({
      zIndex: 1,
      display: 'block',
      width: 168,
      height: 124,
      borderRadius: 16,

      selectors: {
        [`${this.smallFace} &`]: {
          width: 84,
          height: 60,
        },
      },
    });
  },
);

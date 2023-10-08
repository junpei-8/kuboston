import { globalStyle } from '@vanilla-extract/css';
import style from './typescript/style';

globalStyle(':root', {
  fontSize: '14px',
  fontWeight: 500,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  lineHeight: 1.6,
  color: style.theme.constant.onBackground,
  colorScheme: style.theme.constant.schema,
  backgroundColor: style.theme.constant.background,

  '@media': {
    [style.mediaQuery.selector.pc]: {
      fontSize: '18px',
    },
  },

  fontSynthesis: 'none',
  textSizeAdjust: '100%',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('body', {
  margin: 0,
  overflowY: 'scroll',
  lineHeight: 'inherit',
});

globalStyle('svg', {
  fill: 'currentColor',
});

globalStyle('a, button', {
  cursor: 'pointer',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  font: 'inherit',
  appearance: 'none',
  background: 'inherit',
  border: 'none',
});

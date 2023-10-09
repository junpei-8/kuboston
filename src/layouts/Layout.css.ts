import styles, { css, style } from '@/styles';

export default css.instantiate(
  class {
    main = style({
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '900px',
      height: '100%',
      minHeight: ['100vh', '100svh'],
      margin: 'auto',
      opacity: 1,
      transition: `opacity ${styles.animations.easing.constant.standardAccelerate} ${styles.animations.duration.constant.medium1}`,
    });
  },
);

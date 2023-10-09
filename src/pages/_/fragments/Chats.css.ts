import { css, style } from '@/styles';

export default css.instantiate(
  class {
    top = style({
      maxWidth: 400,
    });

    heading = style({
      fontSize: 48,
      textAlign: 'center',
    });

    description = style({
      fontSize: 16,
      fontWeight: 500,
      color: '#858b98',
    });

    // チャット
    chat = style({
      display: 'grid',
      gridTemplateRows: 'min-content',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: '1rem',
      width: '100%',
      maxWidth: 'calc(80% + 40px)',
      padding: '0 20px 20px 20px',
      margin: '0 auto',
      overflowY: 'scroll',
      listStyle: 'none',
    });

    sources = style({
      position: 'relative',
      gridColumn: 'span 5 / -1',
      height: 'fit-content',
      padding: '1rem 1.5rem',
      color: '#fff',
      background: 'linear-gradient(83.21deg,#3245ff 0%,#bc52ee 100%)',
      borderRadius: '1.75rem 1.75rem 0 1.75rem',
      animation: 'fade-in .3s ease-out forwards',

      ':after': {
        position: 'absolute',
        right: '-1rem',
        bottom: 0,
        zIndex: 2,
        width: '1rem',
        height: '1rem',
        content: "''",
        background:
          'radial-gradient(circle at top right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 1rem, #bc52ee 1rem)',
        borderBottomRightRadius: '8rem',
      },
    });

    message = style({
      position: 'relative',
      display: 'flex',
      flexFlow: 'column',
      gridColumn: '1 / -1',
      gap: '0.33em',
      height: 'fit-content',
      padding: '1rem 1.5rem',
      marginTop: 0,
      fontSize: '0.9rem',
      color: '#fffc',

      '::after': {
        position: 'absolute',
        inset: 0,
        zIndex: -2,
        content: '""',
        background: 'linear-gradient(247.23deg,#4af2c8 0%,#2f4cb3 100%)',
      },

      '::before': {
        position: 'absolute',
        inset: '2px',
        zIndex: -1,
        content: "''",
        background: '#17191e',
      },
    });
  },
);

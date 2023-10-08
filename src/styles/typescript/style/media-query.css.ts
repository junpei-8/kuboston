import { style } from '@vanilla-extract/css';
import { css } from '../core';
import type { Style } from '../core';

const _constant = css.instantiate(
  class {
    readonly breakpoint = 1024;

    readonly pc = this.breakpoint;
    readonly mp = this.pc - 1;
  },
);

const _selector = css.instantiate(
  class {
    readonly pc = `(min-width: ${_constant.pc}px)`;
    readonly mp = `(max-width: ${_constant.mp}px)`;
  },
);

const _class = css.instantiate(
  class {
    isMpOnly = style({
      '@media': {
        [_selector.pc]: {
          display: 'none',
        },
      },
    });

    isPcOnly = style({
      '@media': {
        [_selector.mp]: {
          display: 'none',
        },
      },
    });
  },
);

export default (<const>{
  class: _class,
  constant: _constant,
  selector: _selector,
}) satisfies Style;

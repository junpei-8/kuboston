import { style } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';
import { css } from '../../core';
import type { Style } from '../../core';

const _mixin = css.instantiate(
  class {
    base = (): StyleRule => ({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    });
  },
);

const _class = css.instantiate(
  class {
    element = style(_mixin.base());

    afterPseudoElement = style({
      ':after': {
        pointerEvents: 'none',
        content: '',
        ..._mixin.base(),
      },
    });

    beforePseudoElement = style({
      ':before': {
        pointerEvents: 'none',
        content: '',
        ..._mixin.base(),
      },
    });
  },
);

export default (<const>{
  class: _class,
  mixin: _mixin,
}) satisfies Style;

import { css } from '../../core';
import type { Style } from '../../core';

/** @see https://m3.material.io/styles/motion/easing-and-duration/tokens-specs */
const _constant = css.instantiate(
  class {
    readonly linear = 'cubic-bezier(0, 0, 1, 1)';

    readonly standard = 'cubic-bezier(0.2, 0, 0, 1)';
    readonly standardAccelerate = 'cubic-bezier(0.2, 0, 1, 1)';
    readonly standardDecelerate = 'cubic-bezier(0, 0, 0, 1)';

    readonly emphasized = 'cubic-bezier(0.2, 0, 0, 1)';
    readonly emphasizedDecelerate = 'cubic-bezier(0.04, 0.6, 0.1, 1)';
    readonly emphasizedAccelerate = 'cubic-bezier(0.2, 0, 0.8, 0.14)';

    readonly legacy = 'cubic-bezier(0.4, 0, 0.2, 1)';
    readonly legacyDecelerate = 'cubic-bezier(0, 0, 0.2, 1)';
    readonly legacyAccelerate = 'cubic-bezier(0.4, 0, 1, 1)';
  },
);

export default (<const>{
  constant: _constant,
}) satisfies Style;

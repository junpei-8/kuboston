import { css } from '../../core';
import type { Style } from '../../core';

/** @see https://m3.material.io/styles/motion/easing-and-duration/tokens-specs */
const _constant = css.instantiate(
  class {
    readonly short1 = '40ms';
    readonly short2 = '80ms';
    readonly short3 = '120ms';
    readonly short4 = '160ms';
    readonly short5 = '200ms';

    readonly medium1 = '240ms';
    readonly medium2 = '280ms';
    readonly medium3 = '320ms';
    readonly medium4 = '360ms';
    readonly medium5 = '400ms';

    readonly long1 = '440ms';
    readonly long2 = '480ms';
    readonly long3 = '520ms';
    readonly long4 = '560ms';
    readonly long5 = '640ms';

    readonly extraLong1 = '720ms';
    readonly extraLong2 = '800ms';
    readonly extraLong3 = '880ms';
    readonly extraLong4 = '960ms';
    readonly extraLong5 = '1000ms';
  },
);

export default (<const>{
  constant: _constant,
}) satisfies Style;

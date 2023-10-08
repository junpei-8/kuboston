import { css } from '../core';
import type { Style } from '../core';

/** @see https://m3.material.io/styles/shape/shape-scale-tokens */
const _constant = css.instantiate(
  class {
    readonly cornerNone = '0';
    readonly cornerExtraSmall = '4px';
    readonly cornerExtraSmallTop = '4px 4px 0px 0px';
    readonly cornerSmall = '8px';
    readonly cornerMedium = '12px';
    readonly cornerLarge = '16px';
    readonly cornerLargeEnd = '0px 16px 16px 0px';
    readonly cornerLargeTop = '16px 16px 0px 0px';
    readonly cornerExtraLarge = '28px';
    readonly cornerExtraLargeTop = '28px 28px 0px 0px';
    readonly cornerFull = '50%';
  },
);

export default (<const>{
  constant: _constant,
}) satisfies Style;

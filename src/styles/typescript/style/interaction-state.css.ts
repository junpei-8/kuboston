import { css } from '../core';
import type { Style } from '../core';

/** @see https://m3.material.io/foundations/interaction-states */
const _constant = css.instantiate(
  class {
    readonly hover = '8%';
    readonly focus = '12%';
    readonly pressed = '12%';
    readonly dragged = '16%';
  },
);

export default (<const>{
  constant: _constant,
}) satisfies Style;

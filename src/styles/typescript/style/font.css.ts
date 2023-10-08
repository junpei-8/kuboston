import { css } from '../core';
import type { Style } from '../core';

const _constant = css.instantiate(
  class {
    readonly notoSansJp = 'noto-sans-jp-font-family';
    readonly notoSansMono = 'noto-sans-mono-font-family';
  },
);

export default (<const>{
  constant: _constant,
}) satisfies Style;

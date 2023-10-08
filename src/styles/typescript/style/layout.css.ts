import { style } from '@vanilla-extract/css';
import { css } from '../core';
import type { Style } from '../core';
import mediaQueryCss from './media-query.css';

const _constant = css.instantiate(
  class {
    readonly pagePaddingTop = 120;
    readonly pagePaddingBottom = 128;

    readonly outerPaddingMpX = 24;
    readonly outerPaddingPcLeft = 64;
    readonly outerPaddingPcRight = this.outerPaddingPcLeft * 2;

    readonly innerPaddingMpX = 24;
    readonly innerPaddingPcX = 0;

    readonly sectionPaddingMpX = this.outerPaddingMpX + this.innerPaddingMpX;

    readonly sectionPaddingPcLeft =
      this.outerPaddingPcLeft + this.innerPaddingPcX;

    readonly sectionPaddingPcRight =
      this.outerPaddingPcRight + this.innerPaddingPcX;
  },
);

const _class = css.instantiate(
  class {
    page = style({
      boxSizing: 'border-box',
      height: '100%',
    });

    pagePaddingY = style({
      boxSizing: 'border-box',
      paddingTop: _constant.pagePaddingTop,
      paddingBottom: _constant.pagePaddingBottom,

      '@media': {
        [mediaQueryCss.selector.pc]: {
          paddingTop: 160,
          paddingBottom: 240,
        },
      },
    });

    outerPaddingX = style({
      boxSizing: 'border-box',
      paddingRight: _constant.outerPaddingMpX,
      paddingLeft: _constant.outerPaddingMpX,

      '@media': {
        [mediaQueryCss.selector.pc]: {
          paddingRight: _constant.outerPaddingPcRight,
          paddingLeft: _constant.outerPaddingPcLeft,
        },
      },
    });

    innerPaddingX = style({
      boxSizing: 'border-box',
      paddingRight: _constant.innerPaddingMpX,
      paddingLeft: _constant.innerPaddingMpX,

      '@media': {
        [mediaQueryCss.selector.pc]: {
          paddingRight: _constant.innerPaddingPcX,
          paddingLeft: _constant.innerPaddingPcX,
        },
      },
    });

    sectionPaddingX = style({
      boxSizing: 'border-box',
      paddingRight: _constant.sectionPaddingMpX,
      paddingLeft: _constant.sectionPaddingMpX,

      '@media': {
        [mediaQueryCss.selector.pc]: {
          paddingRight: _constant.sectionPaddingPcRight,
          paddingLeft: _constant.sectionPaddingPcLeft,
        },
      },
    });
  },
);

export default (<const>{
  class: _class,
  constant: _constant,
}) satisfies Style;

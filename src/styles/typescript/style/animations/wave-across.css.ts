import { keyframes } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';
import { css } from '../../core';
import type { Style } from '../../core';
import durationCss from './duration.css';
import easingCss from './easing.css';

const _keyframe = css.instantiate(
  class {
    leftToRight = keyframes({
      '0%': {
        transform: 'scaleX(0)',
        transformOrigin: 'left',
      },
      '48%': {
        transform: 'scaleX(1)',
        transformOrigin: 'left',
      },
      '50%': {
        transform: 'scaleX(1)',
        transformOrigin: 'right',
      },
      to: {
        transform: 'scaleX(0)',
        transformOrigin: 'right',
      },
    });

    withHiddenText = keyframes({
      '0%': {
        color: 'transparent',
      },
      '48%': {
        color: 'transparent',
      },
      '50%': {
        color: 'inherit',
      },
    });

    withHiddenContent = keyframes({
      '0%': {
        opacity: 0,
      },
      '48%': {
        opacity: 0,
      },
      '50%': {
        opacity: 1,
      },
    });
  },
);

const _mixin = css.instantiate(
  class {
    private _base = {
      animationDuration: durationCss.constant.long4,
      animationTimingFunction: easingCss.constant.emphasized,
    };

    leftToRight = (): StyleRule => ({
      ...this._base,
      backgroundColor: 'currentColor',
      animationName: _keyframe.leftToRight,
      animationFillMode: 'both',
    });

    withHiddenText = (): StyleRule => ({
      ...this._base,
      animationName: _keyframe.withHiddenText,
      animationFillMode: 'backwards',
    });

    withHiddenContent = (): StyleRule => ({
      ...this._base,
      animationName: _keyframe.withHiddenContent,
      animationFillMode: 'backwards',
    });
  },
);

export default (<const>{
  keyframe: _keyframe,
  mixin: _mixin,
}) satisfies Style;

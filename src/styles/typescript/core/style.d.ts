import type { StyleRule } from '@vanilla-extract/css';

export type StyleValue<V> = Record<string | number | symbol, V>;

export type StyleClass = StyleValue<string>;
export type StyleConstant = StyleValue<string | number | boolean>;
export type StyleFunction = StyleValue<(...params: any[]) => StyleConstant>;
export type StyleKeyframe = StyleValue<string>;
export type StyleMixin = StyleValue<(...params: any[]) => StyleRule>;
export type StyleSelector = StyleValue<string>;

export interface Style {
  class?: StyleClass;
  constant?: StyleConstant;
  function?: StyleFunction;
  keyframe?: StyleKeyframe;
  mixin?: StyleMixin;
  selector?: StyleSelector;
}

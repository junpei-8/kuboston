export const styled = <const>{
  /** テンプレートリテラルを文字列へ変換する */
  stringify(strings: string | TemplateStringsArray, ...values: any[]) {
    if (typeof strings === 'string') return strings;

    return strings.reduce(
      (result, string, i) => `${result}${string}${values[i] || ''}`,
      '',
    );
  },
};

export const css = <const>{
  /** 引数に渡ってきた Class をもとにプレーンオブジェクトを生成する */
  instantiate<T extends Record<string | number | symbol, any>>(
    Model: new () => T,
  ) {
    return { ...new Model() } as { readonly [K in keyof T]: T[K] };
  },
};

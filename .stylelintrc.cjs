/** @type {import('stylelint').Config} */
module.exports = {
  defaultSeverity: 'warning',

  extends: [
    /**
     * @npm https://www.npmjs.com/package/stylelint-config-recommended-scss
     * @config https://github.com/stylelint-scss/stylelint-config-recommended-scss/blob/master/index.js
     */
    'stylelint-config-recommended-scss',

    /**
     * @npm https://www.npmjs.com/package/stylelint-config-recess-order
     * @config https://github.com/stormwarning/stylelint-config-recess-order/blob/main/index.js
     */
    'stylelint-config-recess-order',

    /**
     * @npm https://www.npmjs.com/package/stylelint-config-html
     * @config https://github.com/ota-meshi/stylelint-config-html/blob/main/index.js
     */
    'stylelint-config-html',
  ],

  plugins: [
    /** @npm https://www.npmjs.com/package/stylelint-declaration-block-no-ignored-properties */
    'stylelint-declaration-block-no-ignored-properties',
  ],

  rules: {
    /** @docs https://stylelint.io/user-guide/rules */
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],

    /** @docs https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties#usage */
    'plugin/declaration-block-no-ignored-properties': true,

    /** @docs https://github.com/stylelint-scss/stylelint-scss#list-of-rules */
    'scss/selector-no-union-class-name': true,
  },
};

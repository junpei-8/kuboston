/** @see https://github.com/microsoft/rushstack#readme */
require('@rushstack/eslint-patch/modern-module-resolution');

/** @see https://github.com/vanilla-extract-css/vanilla-extract/blob/master/packages/css */
require('@vanilla-extract/css');

/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,

  extends: [
    /** @config https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts */
    'eslint:recommended',

    /** @config https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js */
    'plugin:import/recommended',
  ],

  plugins: [
    /** @npm https://www.npmjs.com/package/eslint-plugin-import */
    'import',

    /** @npm https://www.npmjs.com/package/eslint-plugin-sort-keys-custom-order */
    'sort-keys-custom-order',
  ],

  globals: {
    $env: 'readonly',
  },

  parserOptions: {
    ecmaVersion: 'latest',
    warnOnUnsupportedTypeScriptVersion: false,
  },

  rules: {
    /** @docs https://eslint.org/docs/latest/rules */
    'no-console': 'off',
    'no-debugger': 'off',

    /** @docs https://github.com/import-js/eslint-plugin-import#rules */
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/named': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'internal',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '+/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc' },
        'newlines-between': 'never',
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            from: '**/*.static.{jsx,tsx}',
            target: '**/!(*.static).{jsx,tsx}',
            message:
              'Importing Static framework components in Dynamic framework components is not allowed. This could potentially lead to the execution of unnecessary JavaScript.',
          },
          {
            from: '**/styles/*',
            target: '**/!(*.static).{jsx,tsx}',
            message:
              'Importing styles defined with "vanilla-extract" in Framework components is not allowed. This could lead to the definition of redundant objects and potential performance degradation.',
          },
          {
            from: '**/*.css.{ts,cts,mts}',
            target: '**/!(*.static).{jsx,tsx}',
            message:
              'Importing styles defined with "vanilla-extract" in Framework components is not allowed. This could lead to the definition of redundant objects and potential performance degradation.',
          },
          {
            from: '**/*.module.{css,scss,sass,less,styl,stylus,pcss,sss}',
            target: '**/!(*.static).{jsx,tsx}',
            message:
              'Importing styles defined with "css-modules" in Framework components is not allowed. This could lead to the definition of redundant objects and potential performance degradation.',
          },
        ],
      },
    ],

    /** @docs https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order#usage */
    'sort-keys-custom-order/import-object-keys': 'warn',
    'sort-keys-custom-order/export-object-keys': 'warn',
  },

  overrides: [
    {
      files: ['**/*.{cjs,cts}'],

      env: { node: true },
    },

    {
      files: ['**/*.{ts,cts,mts,tsx,astro}'],

      extends: [
        /** @config https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts */
        'plugin:@typescript-eslint/recommended',
      ],

      plugins: [
        /** @npm https://www.npmjs.com/package/@typescript-eslint/eslint-plugin */
        '@typescript-eslint',
      ],

      settings: {
        /** @docs https://github.com/import-js/eslint-import-resolver-typescript#configuration */
        'import/resolver': { typescript: {} },
      },

      rules: {
        /** @docs https://typescript-eslint.io/rules */
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
            disallowTypeAnnotations: true,
          },
        ],

        /** @docs https://github.com/import-js/eslint-plugin-import#rules */
        'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
      },
    },

    {
      files: ['**/*.d.{ts,cts,mts}'],

      rules: {
        /** @docs https://eslint.org/docs/latest/rules */
        'no-var': 'off',
      },
    },

    {
      files: ['**/*.{jsx,tsx}'],

      extends: [
        /**
         * @npm https://www.npmjs.com/package/eslint-plugin-solid
         * @config https://github.com/solidjs-community/eslint-plugin-solid/blob/main/src/index.ts
         */
        'plugin:solid/typescript',

        /**
         * @npm https://www.npmjs.com/package/eslint-plugin-jsx-a11y
         * @config https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js
         */
        'plugin:jsx-a11y/strict',
      ],

      plugins: [
        /** @npm https://www.npmjs.com/package/eslint-plugin-react */
        'react',
      ],

      rules: {
        /** @docs https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules */
        'jsx-a11y/control-has-associated-label': 'error',

        /** @docs https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules */
        'react/jsx-sort-props': [
          'warn',
          {
            noSortAlphabetically: true,
            shorthandFirst: true,
            shorthandLast: false,
            callbacksLast: true,
            ignoreCase: true,
            multiline: 'last',
          },
        ],
      },
    },

    {
      files: ['**/*.astro', '**/*.astro/*.js'],

      extends: [
        /**
         * @npm https://www.npmjs.com/package/eslint-plugin-astro
         * @config https://github.com/ota-meshi/eslint-plugin-astro/blob/main/src/configs/recommended.ts
         */
        'plugin:astro/recommended',

        /** @config https://github.com/ota-meshi/eslint-plugin-astro/blob/main/src/a11y/configs.ts */
        'plugin:astro/jsx-a11y-strict',
      ],

      rules: {
        /** @docs https://github.com/ota-meshi/eslint-plugin-astro#a11y-extension-rules */
        'jsx-a11y/control-has-associated-label': 'error',
      },
    },

    {
      files: ['**/*.css.{ts,cts,mts}'],

      rules: {
        /** @docs https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order */
        'sort-keys-custom-order/object-keys': [
          'warn',
          {
            /** @see https://github.com/stormwarning/stylelint-config-recess-order/blob/main/groups.js */
            orderedKeys: require('stylelint-config-recess-order/groups')
              .flatMap(({ properties }) =>
                properties.map((property) =>
                  property.replace(/-./g, (string) => string[1].toUpperCase()),
                ),
              )
              .concat(global.specialKeys || []),
          },
        ],
      },
    },

    {
      files: ['**/components/**/*.{ts,cts,mts,tsx,astro}'],

      rules: {
        /** @docs https://typescript-eslint.io/rules */
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
      },
    },

    {
      files: ['**/fragments/**/*.{ts,cts,mts,tsx,astro}'],

      rules: {
        /** @docs https://typescript-eslint.io/rules */
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      },
    },

    {
      files: ['*'],

      extends: [
        /**
         * @npm https://www.npmjs.com/package/eslint-config-prettier
         * @config https://github.com/prettier/eslint-config-prettier/blob/main/index.js
         */
        'prettier',
      ],
    },
  ],
};

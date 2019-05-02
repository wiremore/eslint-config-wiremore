module.exports = {
  overrides: [
    {
      files: ['.ts', '.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        '@typescript-eslint/no-angle-bracket-type-assertion': 1,
        'no-array-constructor': 0,
        '@typescript-eslint/no-array-constructor': 1,
        '@typescript-eslint/no-namespace': 2,
        'no-unused-vars': 0,
        'no-undef': 0,
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        'no-useless-constructor': 0,
        '@typescript-eslint/no-useless-constructor': 1,
      },
    },
    {
      files: ['.d.ts'],
      rules: {
        'import/export': 0,
        'no-redeclare': 0,
      },
    },
  ],
};

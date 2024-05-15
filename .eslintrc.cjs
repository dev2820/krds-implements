/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  settings: {
    version: 'detect',
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['', './public'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    './.eslintrc-auto-import.json',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['prettier', 'jsx-a11y', 'import', 'react-refresh'],
  rules: {
    'prettier/prettier': 'error',

    'new-cap': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-new-object': 'error',
    'no-duplicate-imports': 'error',
    'no-return-await': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          ':matches(PropertyDefinition, MethodDefinition)[accessibility="private"]',
        message: 'Use #private instead',
      },
    ],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { variables: false, functions: false, classes: true },
    ],

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
  },
};

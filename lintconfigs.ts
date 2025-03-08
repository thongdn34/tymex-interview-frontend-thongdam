import path from 'path'

module.exports = {
  extends: [path.resolve(__dirname, 'react.js'), 'plugin:@next/next/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@next/next/no-css-tags': 'error',
    '@next/next/google-font-display': 'off',
    '@next/next/next-script-for-ga': 'off',
    '@next/next/no-unused-vars': 'off',
    '@next/next/no-before-interactive-script-outside-document': 'error',
    '@next/next/no-img-element': 'off',
    '@next/next/google-font-preconnect': 'off',
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-head-element': 'error',
    '@next/next/no-sync-scripts': 'error',
    '@next/next/no-page-custom-font': 'error',
    '@next/next/no-title-in-document-head': 'error',
    '@next/next/no-styled-jsx-in-document': 'error',
    '@next/next/no-typos': 'off',
    '@next/next/no-unwanted-polyfillio': 'error',
    'import/no-anonymous-default-export': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
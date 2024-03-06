/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@intlify/vue-i18n/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'vue-i18n': {
      localeDir: './src/assets/language/*.{json}',
    },
  },
  rules: {
    // Following rules are not working!
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.ts', '.vue'],
      },
    ],
    '@intlify/vue-i18n/key-format-style': [
      'error',
      'camelCase',
      {
        allowArray: false,
        splitByDots: false,
      },
    ],
  }
}

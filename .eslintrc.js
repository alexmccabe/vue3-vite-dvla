module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/standard',
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error',
  },
};

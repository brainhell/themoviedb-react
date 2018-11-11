module.exports = {
  extends: 'airbnb',
  rules: {
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
  },
  globals: {
    navigator: true,
    window: true,
  },
};
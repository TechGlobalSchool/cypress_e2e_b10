// eslint.config.js
export default [
  {
    rules: {
      indent: ['error', 2],
      'no-unused-vars': 'error',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'max-len': [
        'error', 
        { code: 120, ignoreComments: true, ignoreStrings: true }
      ]
    },
  },
]

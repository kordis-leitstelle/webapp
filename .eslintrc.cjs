module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:storybook/recommended'],
  rules: {
    "import/no-unresolved": "error",
    // svelte currently does not support markdown typescript, but sometimes we want to use inline functions (events etc.)
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn"
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  overrides: [{
    files: ['*.svelte'],
    processor: 'svelte3/svelte3'
  }],
  settings: {
    'svelte3/typescript': require('typescript'),
    'svelte3/ignore-styles': () => true,
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  },
  plugins: ['import', 'svelte3', '@typescript-eslint'],
  ignorePatterns: ['node_modules', '*stories.svelte'],
  globals: {
    "__kordisConfig": "readonly",
    "__appDetails": "readonly"
  }
};

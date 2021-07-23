module.exports = {
    plugins: ['simple-import-sort'],
    root: true, // Make sure eslint picks up the config at the root of the directory
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020, // Use the latest ecmascript standard
        sourceType: 'module', // Allows using import/export statements
        ecmaFeatures: {
            jsx: true, // Enable JSX since we're using React
        },
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the react version
        },
    },
    env: {
        browser: true, // Enables browser globals like window and document
        amd: true, // Enables require() and define() as global variables as per the amd spec.
        node: true, // Enables Node.js global variables and Node.js scoping.
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        'no-plusplus': 0,
        'prefer-destructuring': ['warn', { object: true, array: false }],
        'no-underscore-dangle': 0,
        '@typescript-eslint/ban-ts-comment': [1, { 'ts-ignore': false, 'ts-nocheck': false }],
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        radix: 0,
        'import/no-extraneous-dependencies': 0,
        'jsx-a11y/media-has-caption': 0,
        'react/prop-types': 'off',

        // End temporary rules
    },
};

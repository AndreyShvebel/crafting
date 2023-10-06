module.exports = {
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    ignorePatterns: ['dist', 'node_modules'],
    plugins: [],
    rules: {
        semi: ['error', 'always'],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
            },
        ],
        'no-undef': 'off',
        'react/no-unknown-property': 'off',
    },
};

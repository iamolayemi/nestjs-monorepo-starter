module.exports = {
    root: true,
    extends: ['airbnb', 'airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    ignorePatterns: ['.eslintrc.js', '*.json', 'jest.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',

        '@typescript-eslint/naming-convention': [
            'error',
            { selector: 'enumMember', format: ['UPPER_CASE'] },
            { selector: 'class', format: ['PascalCase'] },
            {
                selector: ['variable', 'function'],
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: false,
                },
            },
            {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
            },
        ],
    },
};

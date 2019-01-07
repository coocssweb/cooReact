// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    //    https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html',
        'react'
    ],
    globals: {
        API_ORIGIN: false,
        ROUTER_MODE: false,
    },
    // add your custom rules here
    'rules': {
        'indent': ['warn', 4],
        'semi': ['warn', 'always'],
        'camelcase': 0,
        'comma-dangle': ['error', {
            'arrays': 'only-multiline',
            'objects': 'only-multiline',
            'imports': 'only-multiline',
            'exports': 'only-multiline',
            'functions': 'ignore',
        }],
        'no-unused-vars': 0,
        'no-undef': 2,
        'arrow-parens': 0,
        // allow async-await
        // 'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-callback-literal': 0,
        'no-new': 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
}

console.log("env==", process.env.BABEL_ENV);
module.exports = {
    "presets": [
        [
            '@babel/env',
            {
                "targets": {
                    "browsers": [
                        "last 2 chrome versions",
                        "last 2 firefox versions",
                        "last 2 safari versions",
                        "last 2 ios versions",
                        "last 2 edge versions",
                        "Firefox ESR",
                        "ie 11"
                    ]
                },
            }
        ],
        "@babel/preset-typescript"
    ],
    "sourceMaps": "inline",
    "plugins": [
        [
            "@babel/plugin-transform-react-jsx",
            {
                "pragma": "h",
                "pragmaFrag": "Fragment",
                "throwIfNamespace": false // defaults to true
            }
        ],
        "@babel/proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        '@babel/plugin-transform-runtime'
    ],
    env: {
        esm: {
            presets: [
                [
                    '@babel/env',
                    {
                        modules: false,
                    },
                ],
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        useESModules: true,
                    },
                ],
            ],
        },
    },
}

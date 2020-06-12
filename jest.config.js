module.exports = {
    cacheDirectory: '.cache/jest',
    clearMocks: true,
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
    },
    "globals": {
        "ts-jest": {
            "babelConfig": {
                "presets": [["@babel/preset-env", { shippedProposals: true, useBuiltIns: 'usage', corejs: '3', "targets": { "node": "current" } }]]
            }
        }
    },
    setupFilesAfterEnv: ["./setupTests.ts"],
    testPathIgnorePatterns: ["node_modules/"],
    testMatch: ["**/*.test.(ts|tsx)"],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "moduleNameMapper": {
        "^react$": "preact/compat",
        "^react-dom/test-utils$": "preact/test-utils",
        "^react-dom$": "preact/compat",
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "identity-obj-proxy",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        // core-js v2 to v3 mapping
        'core-js/modules/es6.(.*)': 'core-js/modules/es.$1',
        'core-js/modules/es7.(.*)': 'core-js/modules/esnext.$1',
        'core-js/library/fn/(.*)': `core-js/features/$1`,
        'core-js/es5/(.*)': `core-js/es/$1`,
        'core-js/es6/(.*)': `core-js/es/$1`,
        'core-js/es7/reflect': `core-js/proposals/reflect-metadata`,
        'core-js/es7/(.*)': `core-js/proposals/$1`,
        'core-js/object$/': `core-js/es/object`,
        'core-js/object/(.*)': `core-js/es/object/$1`,
        'babel-runtime/core-js/(.*)': `core-js/es/$1`,
        // 'babel-runtime/core-js/object/assign'
        'core-js/library/fn/object/assign': 'core-js/es/object/assign',
    },
    setupFiles: ['raf/polyfill'],
    testURL: 'http://localhost',
}

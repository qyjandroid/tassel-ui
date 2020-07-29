const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: ['@storybook/addon-links',
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-notes/register',
        {
            name: '@storybook/preset-typescript',
            options: {
                tsLoaderOptions: {
                    configFile: path.resolve(__dirname, './tsconfig.json'),
                },
                forkTsCheckerWebpackPluginOptions: {
                    colors: false, // disables built-in colors in logger messages
                },
                include: [path.resolve(__dirname, '../src')],
                transpileManager: true,
            },
        }],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../src'),
            exclude: /node_modules/
        });
        config.resolve.extensions.push('.ts', '.tsx', '.css', '.scss');
        return config;
    },
};

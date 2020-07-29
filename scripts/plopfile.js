/* eslint-disable  import/no-extraneous-dependencies */
// import { NodePlopAPI } from 'plop';
// import path from 'path';
const plop = require('plop');
const path = require('path');
const { NodePlopAPI } = plop;


module.exports = function (plop) {
    plop.setGenerator('component', {
        description: '创建一个新组件',
        prompts: [
            { type: 'input', name: 'name', message: '请输入组件名称（驼峰命名,首字母大写）' },
            { type: 'input', name: 'CN', message: '请输入组件中文名称' },
            { type: 'input', name: 'description', message: '请输入组件描述' },
        ],
        actions: [
            {
                type: 'add',
                path: path.resolve(__dirname, '../src/{{pascalCase name}}/index.ts'),
                templateFile: path.resolve(__dirname, '../templates/component/index.hbs'),
            },
            {
                type: 'add',
                path: path.resolve(__dirname, '../src/{{pascalCase name}}/{{pascalCase name}}.tsx'),
                templateFile: path.resolve(__dirname, '../templates/component/comp.hbs'),
            },
            {
                type: 'add',
                path: path.resolve(__dirname, '../src/{{pascalCase name}}/style/index.scss'),
                templateFile: path.resolve(__dirname, '../templates/component/style/index.hbs'),
            },
            {
                type: 'add',
                path: path.resolve(__dirname, '../src/{{pascalCase name}}/types.ts'),
                templateFile: path.resolve(__dirname, '../templates/component/types.hbs'),
            },
            {
                type: 'add',
                path: path.resolve(__dirname, '../src/{{pascalCase name}}/index.stories.js'),
                templateFile: path.resolve(__dirname, '../templates/component/doc.hbs'),
            },
            {
                type: 'add',
                path: path.resolve(__dirname, '../src/{{pascalCase name}}/index.test.tsx'),
                templateFile: path.resolve(__dirname, '../templates/component/__tests__/index.test.hbs'),
            },
            {
                type: 'append',
                path: path.resolve(__dirname, '../src/index.ts'),
                pattern: '/* PLOP_INJECT_EXPORT */',
                template: "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
            },
        ],
    });
}

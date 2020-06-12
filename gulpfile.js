const gulp = require('gulp');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const through2 = require('through2');


const path = require("path");
const rootDir = path.resolve(__dirname, "../");
const buildDir = path.resolve(rootDir, "lib");
const srcDir = path.resolve(rootDir, "src");
const examplesDir = path.resolve(rootDir, "examples");
const examplesSrcDir = path.resolve(examplesDir, "src");
const componentDir = path.resolve(srcDir, "components");

const paths = {
    dest: {
        lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
        esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
        dist: 'dist', // umd文件存放的目录名 - 暂时不关心
    },
    styles: 'src/**/*.scss', // 样式文件路径 - 暂时不关心
    scripts: ['src/**/*.{ts,tsx}',
        '!src/**/*.test.{ts,tsx}',], // 脚本文件路径
    images: "src/**/images/**/*",
};

function modifyStreamContent(modify) {
    return through2.obj(function (file, endcoding, callback) {
        if (file.isNull()) {
            this.push(file)
            return callback()
        }
        if (file.isStream()) {
            log("streaming not supported", "error")
            return callback()
        }
        var content = file.contents.toString()
        content = modify(content, file.path) || content
        file.contents = new Buffer.from(content)
        this.push(file)
        callback()
    })
}

function replaceName() {
    return modifyStreamContent((content, filePath) => {
        content = content.replace(/\.scss/g, ".css")
        return content;
    })
}

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
    const { scripts } = paths;
    // 设置环境变量
    process.env.BABEL_ENV = babelEnv;
    // const curBabelEnv = {
    //     presets: [
    //         [
    //             '@babel/preset-env',
    //             {
    //                 "targets": {
    //                     "browsers": [
    //                         "last 2 chrome versions",
    //                         "last 2 firefox versions",
    //                         "last 2 safari versions",
    //                         "last 2 ios versions",
    //                         "last 2 edge versions",
    //                         "Firefox ESR",
    //                         "ie 11"
    //                     ]
    //                 },
    //                 modules: babelEnv === "esm" ? false : babelEnv
    //             },
    //         ],
    //     ],
    // }


    return gulp
        .src(scripts)
        .pipe(babel())
        .pipe(replaceName())
        // 使用gulp-babel处理
        .pipe(gulp.dest(destDir));
}

/**
 * 编译cjs
 */
function compileCJS() {
    console.log("执行compileCJS");
    const { dest } = paths;
    return compileScripts('cjs', dest.lib);
}

/**
 * 编译esm
 */
function compileESM() {
    console.log("执行compileESM");
    const { dest } = paths;
    return compileScripts('esm', dest.esm);
}

// 串行执行编译脚本任务（cjs,esm） 避免环境变量影响
const buildScripts = gulp.series(compileESM, compileCJS);


function copyImages() {
    return gulp
        .src(paths.images)
        .pipe(gulp.dest(paths.dest.lib))
        .pipe(gulp.dest(paths.dest.esm));
}

/**
 * 拷贝less文件
 */
// function copyLess() {
//     return gulp
//         .src(paths.styles)
//         .pipe(gulp.dest(paths.dest.lib))
//         .pipe(gulp.dest(paths.dest.esm));
// }

/**
 * 生成css文件
 */
function scss2css() {
    return gulp
        .src(paths.styles)
        .pipe(sass()) // 处理sass文件
        .pipe(autoprefixer())
        .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
        .pipe(gulp.dest(paths.dest.lib))
        .pipe(gulp.dest(paths.dest.esm));
}
//
// 整体并行执行任务
const build = gulp.parallel(buildScripts, scss2css, copyImages);


exports.build = build;

exports.default = build;

const { src, dest, watch, series, parallel } = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  htmlmin = require('gulp-htmlmin'),
  replace = require('gulp-replace'),
  autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

const config = {
  app: {
    scss: './src/sass/**/*.scss',
    images: './src/img/*.*',
    html: './src/index.html',
    css: './src/css/main.css',
    mainCss: './src/css',
    img: './src/img/**/*',
  },
  dist: {
    base: './dist/',
    baseJS: './dist/js',
    baseIMG: './dist/img',
    baseCSS: './dist/css',
    images: './dist/img',
  },
  extraBundles: ['./dist/main.js', './dist/main.css'],
};

function copyScripts() {
  return src('./src/js/*.js').pipe(dest('dist/js'));
}

function minCSS() {
  return src(config.app.css)
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('main.min.css'))
    .pipe(dest(config.dist.baseCSS));
}

function compileSass() {
  return src(config.app.scss)
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(maps.write('./'))
    .pipe(dest(config.app.mainCss));
}

function minifyHTML() {
  return src(config.app.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(replace('main.css', 'main.min.css'))
    .pipe(replace('app.js', 'app.min.js'))
    .pipe(dest(config.dist.base));
}

function copyLibrary() {
  return src('./src/css/*.min.css').pipe(dest('dist/css'));
}

function minifyImage() {
  return src(config.app.img)
    .pipe(imagemin())
    .pipe(dest(config.dist.baseIMG));
}

function watchSass() {
  watch(config.app.scss, parallel(compileSass));
}

function clean() {
  del(['dist', 'css/main.css*', 'js/app*.js*']);
}

exports.clean = series(clean);
exports.build = series(copyScripts, compileSass, minifyImage, minifyHTML, minCSS, copyLibrary);
exports.watch = series(watchSass);

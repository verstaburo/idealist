'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var cssmin = require('gulp-csso');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var runSequence = require('run-sequence');
var del = require('del');
var changed = require('gulp-changed');
var ghpages = require('gulp-gh-pages');
var errorHandler = require('gulp-plumber-error-handler');
var svgSymbols = require('gulp-svg-symbols');
var browserSync = require('browser-sync').create;
var debuga = require('debuga');
var bs = browserSync('server');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var cssimport = require('gulp-cssimport');
var sourcemaps = require('gulp-sourcemaps');
var bulkSass = require('gulp-sass-bulk-import');
var stylelint = require('stylelint');
var isDebug = process.env.NODE_ENV !== 'production';
var watch = require('gulp-watch');

gulp.task('styles', function () {
  gulp.src('css/default.scss')
  .pipe(plumber({ errorHandler: errorHandler('Error in styles task') }))
    .pipe(gulpIf(isDebug, sourcemaps.init()))
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(postcss([
      require('autoprefixer'),
      require('postcss-discard-comments'),
    ]))
    .pipe(cssimport())
    .pipe(cssnano({ zIndex: false }))
    .pipe(rename('default.css'))
    .pipe(gulpIf(isDebug, sourcemaps.write()))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function () {
  gulp.src('img/**/*')
    .pipe(plumber({ errorHandler: errorHandler('Error in icons task') }))
    .pipe(changed('dist/img'))
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('icons', function () {
  gulp.src('icons/**/*.svg')
    .pipe(plumber({ errorHandler: errorHandler('Error in icons task') }))
    .pipe(svgSymbols({
      title: false,
      id: 'icon_%f',
      className: '%f',
      templates: ['default-svg'],
    }))
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          { optimizationLevel: 3 },
          { progessive: true },
          { interlaced: true },
          { removeViewBox: false },
          { removeUselessStrokeAndFill: true },
          { cleanupIDs: false },
          { cleanupAttrs: true },
          { removeMetadata: true },
          { removeTitle: true },
          { removeAttrs: { attrs: '(fill|stroke|data-name)' } },
        ],
      }),
    ]))
    .pipe(rename('icon.svg'))
    .pipe(gulp.dest('dist/img/'))
});

/*
gulp.task('scripts', function () {
  gulp.src(['./js/modules/*.js', './js/scripts.js'])
    .pipe(plumber())
    .pipe(sourcemap.init({largeFile: true}))
    .pipe(concat('main.js', {newLine: ';'}))
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(sourcemap.write('.', {addComents: true}))
    .pipe(gulp.dest('./dist/js'))
    .pipe(server.reload({stream: true}));
});
*/

gulp.task('copy', function () {
  return gulp.src([
    'fonts/**/*',
    'js/**/*',
    '*.php',
    '*.ico',
    ],
    {
    base: '.'
    })
    .pipe(changed('dist'))
    .pipe(gulp.dest('dist'
  ));
});

gulp.task('html', function () {
  return gulp.src(
    [
      '*.html'
    ],
    {
      base: '.'
    })
  .pipe(changed('dist'))
  .pipe(gulp.dest('dist'
  ));
});

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('ghpages', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghpages())
});

gulp.task('server', function () {
  bs.init({
    open: true,
    reloadOnRestart: true,
    port: 3000,
    snippetOptions: {
      rules: {
        match: /<\/body>/i,
      },
    },
    server: {
      baseDir: [
        './dist',
      ],
    },
    directory: false,
    middleware: [debuga()],
  });

  bs.watch('dist/**/*.*').on('change', bs.reload);
});

gulp.task('watch', function () {
  global.isWatching = true;
  watch('icons/**/*', function () { runSequence('icons') });
  watch('img/**/*', function () {runSequence('images')});
  watch('js/**/*', function () {runSequence('copy')});
  watch(['*.html'], function () {runSequence('html')});
  watch(['css/**/*.scss'], function () {runSequence('styles')});
  gulp.start('watch');
});

gulp.task('build', function (cb) {
  runSequence('clean', ['styles', 'images', 'icons', 'html', 'copy'], cb)
});

gulp.task('deploy', function () {
  runSequence('build', 'ghpages')
});

gulp.task('default', function () {
  runSequence('build', ['server', 'watch'])
});

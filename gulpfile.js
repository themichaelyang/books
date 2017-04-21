const gulp = require('gulp');
const typeset = require('gulp-typeset');
const sass = require('gulp-sass');
// const concat = require('gulp-concat');

const src = 'src/';
const dist = '';

const paths = {
  scss: src + '**/*.scss',
  html: src + '**/*.html',
  fonts: src + '**/*.woff*'
}

gulp.task('html', () => {
  return gulp.src(paths.html)
    .pipe(typeset())
    .pipe(gulp.dest(dist));
});

gulp.task('scss', () => {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    // .pipe(concat('style.css'))
    .pipe(gulp.dest(dist));
});

gulp.task('fonts', () => {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest(dist));
});

gulp.task('default', ['scss', 'html', 'fonts']);

gulp.task('watch', ['default'], () => {
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('watch-all', ['default'], () => {
  gulp.watch(src, ['default']);
});

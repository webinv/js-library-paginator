const gulp = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const minify = require("gulp-uglify");
const sourceMaps = require('gulp-sourcemaps');
const sequence = require('gulp-sequence');

/**
 * Available project paths
 * @type {Object}
 */
const path = {
    src: './src',
    dist: './dist',
};

/**
 * Source paths
 * @type {Object}
 */
const source = {
    js: path.src,
};

gulp.task('clean', () => gulp.src(`${path.dist}`, {read: false})
    .pipe(clean())
);

gulp.task('scripts', () => gulp.src(`${source.js}/*.js`)
    .pipe(sourceMaps.init())
    .pipe(minify())
    .pipe(concat('paginator.min.js'))
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest(`${path.dist}`))
);

gulp.task('default', sequence('clean', ['scripts']));

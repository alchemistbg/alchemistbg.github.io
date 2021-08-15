'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const exec = require('gulp-exec');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('node-sass'));
const childProcess = require('child_process');

gulp.task('scss', function () {
    return gulp.src('_assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./docs/css'))
        .pipe(browserSync.stream({ match: '**/*.css' }));
});

// Jekyll Development
gulp.task('jekylldev', function () {
    return childProcess.spawn('bundle', ['exec', 'jekyll', 'build'], { stdio: 'inherit', shell: true });
});

// Jekyll Production
gulp.task('jekyllprod', function () {
    return childProcess.spawn('bundle', ['exec', 'jekyll', 'build --baseurl /'], { stdio: 'inherit', shell: true });
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './docs/'
        }
    });

    gulp.watch('_assets/scss/**/*.scss', gulp.series('scss'));

    gulp.watch([
        "./_layouts/*.html",
        './*.html'
    ]).on('change', gulp.series('jekylldev', 'scss'));

    // gulp.watch( 'docs/**/*.html' ).on('change', browserSync.reload );
    // gulp.watch( 'docs/**/*.js' ).on('change', browserSync.reload );
});

gulp.task('default', gulp.series('jekylldev', 'scss', 'watch'));
gulp.task('deploy', gulp.series('jekyllprod', 'scss', 'watch'));
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init(["css/*.css", "js/*.js", "sass/*.sass"],{
    proxy: "localhost:80", // makes a proxy for localhost
});
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/index.sass")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('theme.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass', 'serve'], function() {
    gulp.watch("sass/**/*.sass", ['sass']);
});

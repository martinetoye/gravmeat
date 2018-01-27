var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init(["css/*.css", "js/*.js", "sass/*.sass","templates/*.twig"],{
    proxy: "localhost:80", // makes a proxy for localhost
    browser: "google chrome"
});
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/index.sass")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('theme.css'))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['mamp','sass', 'serve'], function() {
    gulp.watch("sass/**/*.sass", ['sass']);
    gulp.watch("templates/**/*.twig");
});


/* !!!! CONFIGURE !!!!
================================ */
var options = {};
options.user = 'martintoye';
options.password = 'Me11isa10';
options.port = 80;
options.site_path = '/Users/martintoye/Documents/GitHub/gravmeat/'; // something like /Users/username/sites/mymampsite

// Modules
var gulp = require('gulp');
var mamp = require('gulp-mamp');

gulp.task('config', function(cb){
    mamp(options, 'config', cb);
});

gulp.task('start', function(cb){
    mamp(options, 'start', cb);
});

gulp.task('stop', function(cb){
    mamp(options, 'stop', cb);
});

gulp.task('mamp', ['config', 'start']);

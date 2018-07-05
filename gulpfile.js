'use strict'

// Load plugins
var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
const browserSync   = require("browser-sync").create();
const reload        = browserSync.reload;


// SCSS
gulp.task('scss', function () {
    gulp.src('scss/werlabs.scss')
        .pipe(sourcemaps.init())

        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest('css'))

        .pipe(reload({stream: true}));
});

// Browser Sync

gulp.task("browser-sync", () => {
    browserSync.init({
        server: "."
    });
});


// Watch
gulp.task('watch', function() {
    gulp.watch(['scss/werlabs.scss'], ['scss']);
    gulp.watch("*.html", reload);
});

// Default

gulp.task("default", ["browser-sync", "scss", "watch"]);

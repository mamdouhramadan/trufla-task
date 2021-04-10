// const { dest } = require('gulp');
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemap = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    imagemin = require('gulp-imagemin'),
    notify = require("gulp-notify");



// ========================
// Start HTML Task
// ========================
gulp.task('html', function () {
    return gulp.src('dev/html/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(notify("HTML Done!"))
        .pipe(livereload())
});

// =======================
// Start Css Task
// =======================
gulp.task('css', function () {
    return gulp.src(['dev/scss/**/*.css', 'dev/scss/*.scss'])
        .pipe(sourcemap.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("CSS Done!"))
        .pipe(livereload())
})

// ====================================
// Start Libraries and Framework Task
// ====================================
gulp.task('libs', function () {
    return gulp.src(['dev/libs/reset.min.css', 'dev/libs/normalize.css', 'dev/libs/bootstrap.min.css', 'dev/libs/font-awesome.min.css', 'dev/libs/**/*.css', 'dev/libs/**/*.scss'])
        .pipe(sourcemap.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('libs.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("CSS libraries Done!"))
        .pipe(livereload())
})

// ======================
// Start Js Task
// ======================
gulp.task('js', function () {
    return gulp.src(['dev/js/jquery-3.6.0.min.js' , 'dev/js/*.js'])
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify("JS Done!"))
        .pipe(livereload())
})

// ======================
// Start Image Compress
// ======================
gulp.task('img', function () {
    return gulp.src('dev/images/*')
        .pipe(imagemin())
        .pipe(notify("Image Done!"))
        .pipe(gulp.dest('dist/images'))
})
//=========================
//    Start Watch Task
//=========================
gulp.task('watch', function () {
    require('./server.js');
    livereload.listen();
    gulp.watch(['dev/html/**/*.pug', 'dev/html/*.pug'], ['html']);
    gulp.watch(['dev/scss/**/*.css', 'dev/scss/**/*.scss'], ['css']);
    gulp.watch(['dev/libs/**/*.css', 'dev/libs/**/*.scss'], ['libs']);
    gulp.watch('dev/js/*.js', ['js']);
    gulp.watch(['dev/images/*'], ['img']);
})
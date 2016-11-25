// main module gulp, pump
var gulp = require('gulp');
var pump = require('pump');
// gulp tasks
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cleancss = require('gulp-clean-css');
var sass = require('gulp-sass');
// specify public paths
var publicPath = {
    src : './public/src/',
    dest : './public/dist/'
};

// task hello
gulp.task("hello", function(){
    return console.log("hello");
});

gulp.task("gulpworld",  function(){
    return console.log("gulpworld");
});

gulp.task("uglify", function(){
    pump([
        gulp.src(publicPath.src + 'js/uglify.js'),
        uglify(),
        gulp.dest(publicPath.dest + 'js/')
    ]);
});

gulp.task("concat", function(){
    pump([
        gulp.src([publicPath.src + 'js/concat1.js', publicPath.src + 'js/concat3.js', publicPath.src + 'js/concat2.js']),
        concat('concatenated.js'),
        gulp.dest(publicPath.dest + 'js/')
    ]);
});

// image minify
gulp.task("imagemin", function(){
    pump([
        gulp.src([publicPath.src + 'img/*.jpg', publicPath.src + 'img/*.png']),
        imagemin(),
        gulp.dest(publicPath.dest + 'img/')
    ]);
});

//css minify
gulp.task("cleancss", function(){
    pump([
        gulp.src(publicPath.src + 'css/minify.css'),
        cleancss(),
        gulp.dest(publicPath.dest + 'css/')
    ]);
});

//sass compile
gulp.task("sass", function(){
    pump([
        gulp.src(publicPath.src + 'sass/*.scss'),
        sass().on('error', sass.logError),
        gulp.dest(publicPath.dest + 'css/')
    ]);
});

gulp.task("default", ["uglify"]);




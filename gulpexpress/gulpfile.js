// main module gulp, pump
var gulp = require('gulp');
var pump = require('pump');
// gulp tasks
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cleancss = require('gulp-clean-css');
var sass = require('gulp-sass');
var concatcss = require('gulp-concat-css');
var del = require('del');
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
        gulp.src([publicPath.src + 'processed/*.js', publicPath.src + 'js/uglify.js']),
        uglify(),
        gulp.dest(publicPath.dest + 'js/')
    ]);
});

gulp.task("concat", function(){
    pump([
        gulp.src([publicPath.src + 'js/concat1.js', publicPath.src + 'js/concat3.js', publicPath.src + 'js/concat2.js']),
        concat('concatenated.js'),
        uglify(),
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
        gulp.src([publicPath.src + 'css/minify.css', publicPath.src + 'processed/*.css']),
        cleancss(),
        gulp.dest(publicPath.dest + 'css/')
    ]);
});

//sass compile
gulp.task("sass", function(){
    pump([
        gulp.src(publicPath.src + 'sass/*.scss'),
        sass().on('error', sass.logError),
        concatcss(),
        cleancss(),
        gulp.dest(publicPath.dest + 'css/')
    ]);
});

gulp.task("concatcss", function(){
    pump([
        gulp.src([publicPath.src + 'css/concat2.css', publicPath.src + 'css/concat1.css']),
        concatcss('concatenated.css'),
        uglify(),
        gulp.dest(publicPath.dest + 'css/')
    ]);
});

//clean up dest/
gulp.task("clean", function(){
    return del.sync([publicPath.dest + 'js/*.js', publicPath.dest + 'css/*.css', publicPath.dest + 'img/*.*']);
});

//watch public
gulp.task("watch", function(){
    gulp.watch(publicPath.src + 'js/*.js', ["concat", "uglify"]),
    gulp.watch(publicPath.src + 'img/*.jpg', ["imagemin"]),
    gulp.watch(publicPath.src + 'css/*.css', ["concatcss", "cleancss"]),
    gulp.watch(publicPath.src + 'sass/*.scss', ["sass"])
});

gulp.task("default", ["clean", "uglify","concat","imagemin","cleancss","concatcss","sass","watch"]);




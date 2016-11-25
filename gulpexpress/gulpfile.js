var gulp = require('gulp');
var pump = require('pump');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


var publicPath = {
    src : './public/src/',
    dest : './public/dist/'
};


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

gulp.task("default", ["uglify"]);




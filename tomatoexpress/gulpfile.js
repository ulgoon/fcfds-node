var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');


gulp.task("compress", function(cb){
    pump([
        gulp.src("./public/src/js/*.js"),
        uglify(),
        gulp.dest("./public/dest/js/")
    ],cb);
});

gulp.task("default", ["compress"]);

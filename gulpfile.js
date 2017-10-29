var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");

gulp.task("less", function() {
  gulp.task("less/style.less")
  .pipe(plumber())
  .pipe(less())
  .pipe(gulp.dest("css"));
});

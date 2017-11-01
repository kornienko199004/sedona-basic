"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var sorting = require("postcss-sorting");
var server = require("browser-sync").create();

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

/*gulp.task('css', function () {
    return gulp.src('./css/*.css').pipe(
        postcss([
            sorting({
              "properties-order": [{
                  "emptyLineBefore": false,
                  "properties": [
                      "content",
                      "position",
                      "top",
                      "right",
                      "bottom",
                      "left",
                      "z-index"
                  ]
              }]
            })
        ])
    ).pipe(
        gulp.dest('./css')
    );
});*/

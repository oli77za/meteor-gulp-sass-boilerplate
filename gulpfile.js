var gulp = require('gulp'),
  fs = require('fs'),
  path = require('path'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer');

var config = require('./config');

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(config.globs.sass.src, ['sass']);
});


gulp.task('sass', function() {
  var result = gulp.src(config.globs.sass.src)
    .pipe(sourcemaps.init())
    .pipe(concat(config.globs.tmpFile))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.globs.tmpDir))
    .pipe(sass({
      errLogToConsole: true,
      sourceMap: 'none',
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(config.globs.destDir));
  return result;
});

gulp.task('default', ['sass', 'watch']);
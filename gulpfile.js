var gulp = require('gulp');
var mocha = require('gulp-mocha');
var traceur = require('gulp-traceur');

gulp.task('compile-tests', function(cb) {
  return gulp.src('test/test.js')
      .pipe(traceur())
      .pipe(gulp.dest('dist'));
});

gulp.task('compile-src', function(cb) {
  return gulp.src('src/*.js')
      .pipe(traceur())
      .pipe(gulp.dest('dist'));
});

gulp.task('test', ['compile-src', 'compile-tests'], function() {
  return gulp.src(['dist/test.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('should')
      }
    }));
});

gulp.task('default', ['compile-src', 'compile-tests', 'test']);
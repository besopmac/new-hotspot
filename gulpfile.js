var gulp        = require('gulp')
var pug         = require('gulp-pug')
var stylus      = require('gulp-stylus')
var imagemin    = require('imagemin')
var browserSync = require('brownser-sync').create()

gulp.task('pug', function() {
  gulp.src('./src/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('./out/'))
})

gulp.task('stylus', function() {
  gulp.src('./src/assets/styles/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./out/assets/styles/'))
})

gulp.task('imagemin', function() {
  gulp.src('./src/assets/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./out/assets/img'))
})

gulp.task('watch', ['pug','stylus'], function(done) {
  browserSync.reload()
  done()
})

gulp.task('serve', ['pug'], function() {
  browserSync.init({
    server: {
      baseDir: "./out"
    },
    notify: false
  })

  gulp.watch('./src/*.pug', ['pug'])
})

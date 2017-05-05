const gulp = require('gulp')
const pug = require('gulp-pug')
const stylus = require('gulp-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')
const lost = require('lost')
const imagemin = require('gulp-imagemin')
const connect = require('gulp-connect')

gulp.task('pug', () => {
  gulp.src('./src/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('./out/'))
      .pipe(connect.reload())
})

gulp.task('stylus', () => {
  gulp.src('./src/assets/css/*.styl')
      .pipe(stylus({
        compress: true,
        use: [
          poststylus(['autoprefixer','lost'])
        ]
      }))
      .pipe(gulp.dest('./out/assets/css'))
      .pipe(connect.reload())
})

gulp.task('imagemin', () => {
  gulp.src('./src/assets/*')
      .pipe(imagemin([
        imagemin.jpegtran({
          progressive: true
        })
      ]))
      .pipe(gulp.dest('./out/assets'))
})

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.pug'], ['pug'])
  gulp.watch(['./src/assets/css/**/*.styl'], ['stylus'])
})

gulp.task('connect', () => {
  connect.server({
    root: './out',
    livereload: true
  })
})

gulp.task('build', ['pug', 'stylus', 'imagemin'])
gulp.task('server', ['connect', 'watch'])

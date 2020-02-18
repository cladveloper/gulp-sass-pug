const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', async () => {
    await gulp.src('./styles/main.sass')
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: false,

        }))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('pug', async () => {
    await gulp.src('./views/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', () => {
    gulp.watch('./styles', gulp.series('sass'));
    gulp.watch('./views', gulp.series('pug'));
});
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', async () => {
    await gulp.src('./assets/styles/main.sass')
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: false,

        }))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', () => {
    gulp.watch('./assets', gulp.series('sass'));
});
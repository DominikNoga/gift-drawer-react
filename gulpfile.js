const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task("sass", (done) => {
    gulp.src("src/sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("gift-drawer/src/css"));
        done();
})

gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.scss',gulp.series('sass'));
})
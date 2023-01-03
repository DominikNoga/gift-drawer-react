import gulp from 'gulp';
import node_sass from 'sass';
import gulpSass from 'gulp-sass'
import imagemin from 'gulp-imagemin'
const sass = gulpSass(node_sass);

gulp.task("sass", (done) => {
    gulp.src("src/sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("gift-drawer/src/css"));
        done();
})

gulp.task("img_min", (done) => {
    gulp.src('src/img/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('gift-drawer/src/img'))
    done();
})
gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.scss',gulp.series('sass'));
    gulp.watch('src/img/*',gulp.series('img_min'));
})
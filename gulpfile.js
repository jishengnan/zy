var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('./src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('watch', function() {
    gulp.watch('./src/css/*.scss', gulp.series('sass'))
});
gulp.task('default', gulp.series('sass', 'watch'));
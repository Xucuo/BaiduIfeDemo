var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('copy',function () {
   return gulp.src('base.less')
    .pipe(less())
    .pipe(gulp.dest('code/css/'))
});
gulp.task('less-watch',function () {
   gulp.watch('base.less',['copy'])
});
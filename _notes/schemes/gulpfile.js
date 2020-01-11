const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');


//----------------------------------------------
//CREATE NEW TASK 
//----------------------------------------------

//  gulp.task('task-name', function () {   
//     return gulp.src('source-files')  //Get source files
//     .pipe(aGulpPlugin())     //Send it through a gulp plugin
//     .pipe(gulp.dest('destination'))  //Output to destination
// })

//-----------------------------------------------------



// Test Greet [$ gulp greet]
gulp.task('greet', function (done) {
    console.log('Loading from gulp ...');
    done();
});

// ---> old version
// gulp.task('sass', function () {
//     return gulp
//         .src('src/assets/styles/main.scss')
//         .pipe(sass())
//         .pipe(autoprefixer())
//         .pipe(gulp.dest('dist/assets/styles'))
// });

// gulp.task('sass', function () {   
//     return gulp.src('src/assets/styles/main.scss')
//            .pipe(sass())
//            .pipe(autoprefixer())
//            .pipe(browserSync.reload{
//                 stream:true
//             })
//            .pipe(gulp.dest('dist/assets/styles'))
//  });


// gulp.task('watch', function () {
//     gulp.watch('src/assets/styles/**/*.scss', gulp.series('sass', 'reload'));
//     gulp.watch('src/**/*.{html,js,css}', gulp.series('reload'));
// });

// gulp.task('serve', function(){
//     browserSync.init({
//         server: './src',
//         port: 4000
//     });
// })

// // gulp.task('reload', function (done) {
// //     browserSync.reload();
// //     done();
// // });

// gulp.task('default', gulp.parallel('serve', 'watch'));

// // gulp.task('useref', function () {
// //     return gulp.src('src/*.html')
// //         .pipe(useref())
// //         .pipe(gulpif('*.css', csso()))
// //         .pipe(gulp.dest('dist'))
// // })
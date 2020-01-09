var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssmin      = require('gulp-clean-css');
var htmlmin     = require('gulp-htmlmin');
var imagemin    = require('gulp-imagemin');
var jsmin       = require('gulp-uglify');
var rename      = require('gulp-rename');
var reload      = browserSync.reload;

var Asset = {       // Configuring listening paths
    // html: './src/html/*.html',
    html: './src/*.html',
    js: './src/assets/scripts/*.js',
    sass: './src/assets/styles/*.scss',
    img: './src/assets/images/*'
}

// Start a static server
gulp.task('server', function() {
    browserSync.init({
        server: "."
    });
});

gulp.task('html', function() {      // html Processing Module of Code
  gulp.src(Asset.html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('img', function() {       // Picture processing module, responsible for compressing pictures and what
    return gulp.src(Asset.img)
        .pipe(imagemin({optimizationLevel: 7}))
        .pipe(gulp.dest('dist/assets/images/'));
});

gulp.task('js', function() {        // js Processing module
  return gulp.src(Asset.js)
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/assets/scripts/'));
});

gulp.task('sass', function() {      // sass processing module
    return gulp.src(Asset.sass)
        .pipe(sass())
        .pipe(prefix())
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(gulp.dest("dist/assets/styles/"))
        .pipe(reload({stream: true}));
});
gulp.task('watch', function() {     // Listener Service
    gulp.watch(Asset.sass, ['sass'], reload);
    gulp.watch(Asset.js, ['js'], reload);
    gulp.watch(Asset.html, ['html'], reload);
    gulp.watch(Asset.img, ['img'], reload);
    gulp.watch("*").on('change', reload);
    gulp.watch("./dist/**/*.*").on('change', reload);
});

// start-up
gulp.task('default', ['sass', 'img', 'html', 'js', 'server', 'watch']);
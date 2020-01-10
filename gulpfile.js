const gulp = require("gulp");

const sass = require("gulp-sass");
// sass.compiler = require('node-sass');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
// const cssnano = require("cssnano");
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');


const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const sourcemaps = require("gulp-sourcemaps");
const del = require('del');

const imagemin = require('gulp-imagemin');
const browserSync = require("browser-sync").create();

var paths = {
    routes: {
        src: './src',
        dest: './dist',
    },
    styles: {
        // By using styles/**/*.sass - styles/**/*.scss we're telling gulp to check all folders for any sass file 
        // src: './src/assets/styles/**/*.{sass,scss}',

        src: './src/assets/styles/**/*.scss',
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: './dist/assets/styles',
        watch:'./src/assets/styles/**/*.scss',
    },
    scripts: {
        src: './src/assets/scripts/*.js',
        dest: './dist/assets/scripts',
        watch:'./src/assets/scripts/**/*.js',
    },
    images: {
        // src: 'src/assets/src/images/**/*.+(png|jpg|gif|svg)',
        // src: './src/assets/images/**/*.(png|jpg|gif|svg)', 
        src: './src/assets/images/**/*.{jpg,jpeg,png,svg}', 
        dest: './dist/assets/images',
        // watch:'./src/assets/images/**/*',
        watch:'./src/assets/images//**/*.{jpg,jpeg,png,svg}',

    },
    // Easily add additional paths
    markups: {
     src: './src/*.html',
     dest: 'dist', 
     watch:'./src/**/*.html',
    }
};


// Greet
function hello(cb) {
    console.log('hello');
    cb();
  }

// Limpieza del directorios

function clean() {      
    return del([
        // './vendor/',
        paths.styles.dest,
        // 'dist/report.csv',
        // here we use a globbing pattern to match everything inside the `mobile` folder
        // 'dist/mobile/**/*',
        // we don't want to clean this file though so we negate the pattern
        // '!dist/mobile/deploy.json'
      ]);
}


// Configure Vendors tasks.
// Bring third party dependencies from node_modules into vendor directory
// function modules() {
//     // Bootstrap
//     var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
//       .pipe(gulp.dest('./vendor/bootstrap'));
//     // jQuery
//     var jquery = gulp.src([
//         './node_modules/jquery/dist/*',
//         '!./node_modules/jquery/dist/core.js'
//       ])
//       .pipe(gulp.dest('./vendor/jquery'));
//     return merge(bootstrap, jquery);
// }
  

// Configure CSS tasks.
function style() {
    return gulp
        .src(paths.styles.src)
        // Initialize sourcemaps before compilation starts
        // .pipe(sourcemaps.init())
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .on("error", sass.logError)
        // Use postcss with autoprefixer and compress the compiled file using cssnano
        // .pipe(prefix('last 2 versions'))
        // .pipe(postcss([autoprefixer(), cssnano()]))
        // minimize styles
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        // Now add/write the sourcemaps
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream());
}



  // Configure JS.
function script() {
    return gulp
        .src(paths.scripts.src)
        // Initialize sourcemaps before compilation starts
        .pipe(uglify())
        // minimize scripts
        .pipe(concat('bundle.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.scripts.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream());
}

// Configure image stuff.
function image() {
    return gulp
        .src(paths.images.src)
        // Initialize sourcemaps before compilation starts
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream());
}

// Configure HyperText Markup.
function markup() {
    return gulp
        .src(paths.markups.src)
        // .pipe(useref())
        .pipe(gulp.dest(paths.markups.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream());
}

// A simple task to reload the page
function reload(done) {
    browserSync.reload();
    done();
}

// Add browsersync initialization at the start of the watch task
function watch() {
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./dist"
        },
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
        // browser: "google chrome canary"
    });
    gulp.watch(paths.styles.watch, style);
    gulp.watch(paths.scripts.watch, script);
    gulp.watch(paths.images.watch, image);

    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    gulp.watch(paths.markups.watch, reload);
}
 
// We don't have to expose the reload function
// It's currently only useful in other functions
exports.clean = clean;
// exports.vendor = vendor;

// Don't forget to expose the task!
exports.watch = watch
// exports.build = build;
// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;
exports.script = script;
exports.markup = markup;
exports.image = image;

// Clean
// exports.clean = clean;
// exports.hello = hello;


/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = gulp.parallel(style, script, image, markup, watch);
// const vendor = gulp.series(clean, modules);
// const watch = gulp.series(build, gulp.parallel(watch, browserSync));

/*
 * You can still use `gulp.task` to expose tasks
 */
// gulp.task('build', build);
 
/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
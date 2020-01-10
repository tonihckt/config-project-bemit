# Compilers
@link: http://koala-app.com/


# What is Gulp?
@link: https://gulpjs.com/
@link: https://nodejs.org/en/
@link: https://www.npmjs.com/

@doc: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

Gulp is a task runner, meaning that you can use it to automate common tasks in the development of a project. It’s built on Node.js and both Gulp and your Gulp file are written in JavaScript.

@link: https://gulpjs.com/plugins/

You can write tasks to lint, beautify, minify and concatenate your JavaScript and CSS, add watchers, run multiple tasks and much more.

You can install Gulp through NPM also the Github repository offers a getting started guide.

- How did I improve my workflow?
After I installed Gulp I went to the Gulp plugin registry, searched through the 1800+ plugins and picked the ones that could benefit my workflow.
How to use a Gulp plugin?
Most of the time a code example and documentation are provided on the NPM page of the plugin. In general it would be something like this:

```

/*
 * A simple Gulp task template
 */

var gulp = require('gulp'),
    pluginname = require('gulp-pluginname');
gulp.task('default', function() {
    return gulp.src('source_path')
        .pipe(pluginname({options}))
        .pipe(gulp.dest('destination_path'));
});
```

- There are 12 that are mentionable plugins that really improved my workflow I’ve listed them below.

## [1] gulp-plumber
@link: https://www.npmjs.com/package/gulp-plumber

gulp-plumber prevents pipe breaking caused by errors from gulp plugins (when an error occurs gulp watch tasks are automatically stopped).
Pipe breaking is caused by a bug you can read more about it in this Github gist

@link: https://github.com/gulpjs/gulp/issues/91
@link: https://gist.github.com/floatdrop/8269868

## [2] gulp-less
@link: https://www.npmjs.com/package/gulp-less
gulp-less allows you to compile your LESS to CSS if written in the LESS syntax.

## [3] gulp-cssbeautify
@link: https://www.npmjs.com/package/gulp-cssbeautify
gulp-cssbeautify allows you to automatically format your CSS code to be consistent and easy to read.

## [4] gulp-csslint
@link: https://www.npmjs.com/package/gulp-csslint

gulp-csslint allows you to lint your CSS code. Linting is the process of running a program that will analyse code for potential errors. You can lint your CSS files to write better code.

## [5] gulp-jsbeautifier
@link: https://www.npmjs.com/package/gulp-jsbeautifier
gulp-jsbeautifier allows you to automatically format your JavaScript code to be consistent and easy to read. gulp-jsbeautifier can also beautify your html templates.
I personally use this file for configuration .jsbeautifyrc

## [6] gulp-jshint
@link: https://www.npmjs.com/package/gulp-jshint

gulp-jshint allows you to lint your JavaScript code. Linting is the process of running a program that will analyse code for potential errors. You can lint your JavaScript files to write better code.

optional: you can use jshint-stylish to style the errors in a nice way.

## [7] gulp-minify-css
@link: https://www.npmjs.com/package/gulp-minify-css
@link: https://github.com/jakubpawlowicz/clean-css

gulp-minify-css is a wrapper around clean-css that allows you to minify your CSS in an efficient way. You can minify your CSS files to gain performance.

## [8] gulp-uglify
@link: https://www.npmjs.com/package/gulp-uglify
@link: https://github.com/mishoo/UglifyJS2

gulp-uglify allows you to minify your JavaScript in an efficient way using the UglifyJS2 library. You can minify your JavaScript files to gain performance.

## [9] gulp-sourcemaps
@link: https://www.npmjs.com/package/gulp-sourcemaps

gulp-sourcemaps allows you to generate sourcemaps. A source map provides a way of mapping code within a compressed file back to it’s original position in a source file.

As you can see in this screenshot the unminified CSS is still available after I minified it through gulp-minify-css
sourcemaps also work with JavaScript if you want to learn more about it Matt West from treehouse has written a good blog about it.

## [10] gulp-strip-comments
@link: https://www.npmjs.com/package/gulp-strip-comments

gulp-strip-comments allows you to strip comments out of your Javascript and CSS files, when concatenating the file through gulp-concat comments could cause errors.

## [11] gulp-autoprefixer
@link: https://www.npmjs.com/package/gulp-autoprefixer

gulp-autoprefixer allows you to prefix your CSS automatically, prefixes are used to gain browser compatibility.

## [12] gulp-concat
@link: https://www.npmjs.com/package/gulp-concat

gulp-concat allows you to concatenate your JavaScript and CSS files to a single file. You can concatenate your files to gain performance.

## [13] gulp-gzip
@link: https://www.npmjs.com/package/gulp-gzip

gulp-gzip allows you to gzip your files, you can gzip your files to gain performance.

## [14] gulp-util
@link: https://www.npmjs.com/package/gulp-util

gulp-util allows you to use different utilities for gulp plugins. I especially like the colour console output logging.

I output logs around my tasks so I can see what happens throughout the run.

## [15] gulp-load-plugins
@link: https://www.npmjs.com/package/gulp-load-plugins

gulp-load-plugins allows you to load multiple Gulp plugins and attaches them to the global scope so you don’t have all the require’s in your Gulpfile.

## [16] browser-sync
@link: https://www.npmjs.com/package/browser-sync

browser-sync allows you to setup a lightweight web server with support for Live Reload & Browser Syncing. The server would be accessible from multiple devices.
Run multiple Gulp tasks
Gulp allows you to run a set of tasks after each other by providing an array of tasks (strings) as second parameter for the task method.

```
/*
 * Run multiple tasks
 */

gulp.task('default', ['gulp-task-1', 'gulp-task-2']);
Watch a directory and run on save
Gulp allows you to watch a directory and run a or multiple tasks on save.
```

```
/*
 * Watch a directory and run on save
 */

gulp.task('watch', function() {
 gulp.watch('path_to_watch', ['gulp-task']);
 });
```

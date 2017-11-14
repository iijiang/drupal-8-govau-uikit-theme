/*global -$ */
'use strict';
if (!this.Promise) {
    //require('es6-promise').polyfill();
    var Promise = require('es6-promise').Promise;
}
var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); //postRequireTransforms
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var outputPath = 'styleguide';

// Error notifications
var reportError = function(error) {
    $.notify({
        title: 'Gulp Task Error',
        message: 'Check the console.'
    }).write(error);
    console.log(error.toString());
    this.emit('end');
}

// Sass processing
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe($.sourcemaps.init())
        // Convert sass into css
        .pipe($.sass({
            outputStyle: 'nested', // libsass doesn't support expanded yet
            precision: 10
        }))
        // Show errors
        .on('error', reportError)
        // Autoprefix properties
        .pipe($.autoprefixer({
            browsers: ['last 2 versions']
        }))
        // Write sourcemaps
        .pipe($.sourcemaps.write())
        // Save css
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/**/*.js')
        .pipe(gulp.dest('js'));
});

//Optimize Images
gulp.task('images', function() {
    return gulp.src('img/**/*')
        .pipe($.imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{
                cleanupIDs: false
            }]
        }))
        .pipe(gulp.dest('images'));
});

// JS hint
gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(reload({
            stream: true,
            once: true
        }))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.notify({
            title: "JS Hint",
            message: "JS Hint says all is good.",
            onLast: true
        }));
});

// Beautify JS
gulp.task('beautify', function() {
    gulp.src('js/*.js')
        .pipe($.beautify({indentSize: 2}))
        .pipe(gulp.dest('scripts'))
        .pipe($.notify({
            title: "JS Beautified",
            message: "JS files in the theme have been beautified.",
            onLast: true
        }));
});

// Compress JS
gulp.task('compress', function() {
    return gulp.src('js/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('scripts'))
        .pipe($.notify({
            title: "JS Minified",
            message: "JS files in the theme have been minified.",
            onLast: true
        }));
});

// Run drush to clear the theme registry
gulp.task('drush', function() {
    return gulp.src('', {
        read: false
    })
        .pipe($.shell([
            'drush cc css-js',
        ]))
        .pipe($.notify({
            title: "Caches cleared",
            message: "Drupal CSS/JS caches cleared.",
            onLast: true
        }));
});

// BrowserSync
gulp.task('browser-sync', function() {
    //watch files
    var files = [
        'styles/main.css',
        'js/**/*.js',
        'img/**/*',
        'templates/**/*.twig'
    ];
    //initialize browsersync
    browserSync.init(files, {
        proxy: "ds2017.loc.gbuild.net" // BrowserSync proxy, change to match your local environment
    });
});

// Styleguide Generator with SC5: https://github.com/SC5/sc5-styleguide
gulp.task('styleguide:generate', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(styleguide.generate({
            title: 'My Styleguide',
            overviewPath: 'README.md',
            server: true,
            port: 3010,
            // customColors: '/scss/utils/_styleguide_custom_variables.scss',
            // For static style guide. Generat relative to your environment:
            // appRoot: '/themes/drupal-8-govau-uikit-theme/styleguide',
            extraHead: [
                '<link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900">',
            ],
            rootPath: outputPath,
            disableEncapsulation: true,
            // disableHtml5Mode: true
        }))
        .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
    return gulp.src('src/sass/main.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(outputPath));
});

// Style guide generator incorporated into default gulp task (Experimental).
// Uncomment and replace the current task bellow if you need a style guide generated when you run 'gulp'.
// Style guide will be served on port: 3010.

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

// Default tasks with styleguide.
// gulp.task('default', ['sass', 'browser-sync', 'styleguide'], function() {
// gulp.watch("src/scss/**/*.scss", ['sass', 'styleguide']);
// gulp.watch("js/**/*.js", ['js']);
// });

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch("src/sass/**/*.scss", ['sass']);
    gulp.watch("js/**/*.js", ['js']);
});
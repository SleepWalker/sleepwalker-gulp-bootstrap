// TODO:
//  - gulp-watch
//  
// gulp-changed - only pass through changed files
// gulp-cached - in-memory file cache, not for operation on sets of files
// gulp-remember - pairs nicely with gulp-cached
// gulp-newer - pass through newer source files only, supports many:1 source:dest


var tasks = {
    'compass': {},
    'imagemin': {},
    'fonts': {},
    'browserify': {},
    'browsersync': {
        'host': 'sitemarket.glp',
        'injectChanges': true,
    },
    'watch': {},
    'mocha-phantomjs': {},
    'mocha-browserify': {},
    '_options': {
        'distPath': 'assets'
    }
    };
var gulp = require('./gulp')(tasks);

gulp.task('default', ['browsersync', 'browserify', 'watch']);
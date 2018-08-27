var gulp = require('gulp'),
    map = require('map-stream'),
    htmlmin = require('gulp-htmlmin'),
    browserSync = require('browser-sync').create();

gulp.task('json', function() {
    return gulp.src('translate.json', { base: './' })
        .pipe(map(function(file, cb) {
            var fileContents = file.contents.toString();
            fileContents = fileContents + '\n' + fileContents.replace("/en/", "/ar/") + '\n' + fileContents.replace("/en/", "/bg/") + '\n' + fileContents.replace("/en/", "/cs/") + '\n' + fileContents.replace("/en/", "/da/") + '\n' + fileContents.replace("/en/", "/de/") + '\n' + fileContents.replace("/en/", "/el/") + '\n' + fileContents.replace("/en/", "/es/") + '\n' + fileContents.replace("/en/", "/et/") + '\n' + fileContents.replace("/en/", "/fi/") + '\n' + fileContents.replace("/en/", "/fr/") + '\n' + fileContents.replace("/en/", "/he/") + '\n' + fileContents.replace("/en/", "/hi/") + '\n' + fileContents.replace("/en/", "/hu/") + '\n' + fileContents.replace("/en/", "/id/") + '\n' + fileContents.replace("/en/", "/it/") + '\n' + fileContents.replace("/en/", "/ja/") + '\n' + fileContents.replace("/en/", "/ko/") + '\n' + fileContents.replace("/en/", "/nl/") + '\n' + fileContents.replace("/en/", "/no/") + '\n' + fileContents.replace("/en/", "/pl/") + '\n' + fileContents.replace("/en/", "/pt/") + '\n' + fileContents.replace("/en/", "/pt-br/") + '\n' + fileContents.replace("/en/", "/ro/") + '\n' + fileContents.replace("/en/", "/ru/") + '\n' + fileContents.replace("/en/", "/sv/") + '\n' + fileContents.replace("/en/", "/tr/") + '\n' + fileContents.replace("/en/", "/uk/") + '\n' + fileContents.replace("/en/", "/zh-Hans/") + '\n' + fileContents.replace("/en/", "/zh-Hant/");

            file.contents = new Buffer(fileContents);
            cb(null, file);
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('html', ['json'], function() {
    return gulp.src('*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
});

gulp.task('browser-sync', ['json'], function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('default', ['json', 'html', 'browser-sync']);
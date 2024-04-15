// Učitavanje potrebnih modula
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
const minifyCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// Definiranje zadatka za kompilaciju i minifikaciju JavaScript-a
gulp.task('js', () =>
    gulp.src('js/*.js')
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
);

// Definiranje zadatka za kompilaciju i minifikaciju SCSS-a
gulp.task('sass', () =>
    gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'))
);

// Definiranje zadatka za praćenje promjena i osvježavanje preglednika
gulp.task('watch', () => {
    browserSync.init({
        server: './'
    });

    gulp.watch('js/*.js', gulp.series('js')).on('change', browserSync.reload);
    gulp.watch('styles/*.scss', gulp.series('sass')).on('change', browserSync.reload);
});

// Zadani zadaci koji se izvršavaju pokretanjem 'gulp' u terminalu
gulp.task('default', gulp.series('js', 'sass', 'watch'));

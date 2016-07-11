/*merging jquery, bootstrap and remodal js files*/
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    image = require('gulp-image'),
    pngquant = require('imagemin-pngquant'),
    uglify = require('gulp-uglify'),
    htmlreplace = require('gulp-html-replace'),
    htmlmin = require('gulp-htmlmin'),
    critical = require('critical').stream,
    replace = require('replace'),
    imageop = require('gulp-image-optimization'),
    imageResize = require('gulp-image-resize');

gulp.task('critical', ['css-merge-minify', 'scripts1', 'copy-root-files'], () => {
    return gulp.src('./dist/index.html')
        .pipe(critical({base: './dist/', inline: true, css:'./dist/css/all.min.css'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('replace-with-allmincss', ['critical'], () => {
  replace({
    regex: '<link href="css/style.css" rel="stylesheet">',
    replacement: '<link href="css/all.min.css" rel="stylesheet">',
    paths: ['./dist/index.html'],
    recursive: true,
    silent: true,
  });
  replace({
    regex: '<link href="css/print.css" rel="stylesheet">',
    replacement: '',
    paths: ['./dist/index.html'],
    recursive: true,
    silent: true,
  });
})

gulp.task('css-merge-minify', () => {
    return gulp.src(['./src/css/*.css'])
        .pipe(concat('all.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('css-move-minify', () => {
    return gulp.src(['./src/css/*.css'])
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css/'));
});


gulp.task('scripts1', () => {
    return gulp.src(['./src/js/perfmatters.js'])
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('img', () => {
    return gulp.src('./src/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('images', () => {
    return gulp.src([ './src/views/images/*-min.jpg', './src/views/images/*-min.png' ])
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images/'));
});



gulp.task('copy-root-files', () => {
    return gulp.src(['./src/index.html'])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('htmlmin', ['replace-with-allmincss'], () => {
    gulp.src('./dist/index.html')
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS:true, minifyJS:true}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('views', () => {
    return gulp.src('./src/views/**')
        .pipe(gulp.dest('dist/views/'));
});


gulp.task('default', ['css-merge-minify', 'css-move-minify','scripts1', 'copy-root-files', 'img', 'htmlmin', 'replace-with-allmincss', 'critical', 'views', 'images']);

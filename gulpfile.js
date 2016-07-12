/*AUTOMATED TASKS TO OPTIMIZE index.html AND pizza.html rendering*/

/* PART 1 - optimize index.html to achieve a pagespeed score of at least 90 for mobile and desktop
 *
 * 1. Optimized css rendering by eliminating blocking css rules
 * 2. Merged and minified css files 
 * 3. Optimized images
 * 4. Minified javascript files
 * 5. Minified html files
 */

/* PART 2 - Optimizing Frames Per Second in pizza.html
 *
 * 1. Optimized css rendering by eliminating blocking css rules
 * 2. Merged and minified css files
 * 3. Optimized and resized images
 * 4. Refactored the pizza resizing function to resize the pizzas under 5ms
 * 5. Eliminated the moving pizzas background in main.js and index.html
 * 6. minified main.js and pizza.html


/*necessary packages for build process*/
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    image = require('gulp-image'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    critical = require('critical').stream,
    replace = require('replace');

/*converts blocking css elements into non-blocking elements */
gulp.task('critical', ['css-merge-minify', 'scripts1', 'copy-root-files'], () => {
    return gulp.src('./dist/index.html')
        .pipe(critical({base: './dist/', inline: true, css:'./dist/css/all.min.css'}))
        .pipe(gulp.dest('./dist/'));
});

/*replace unmerged css files to all.min.css in index.html*/
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
});

/*concatenate and minify css files in all.min.css for index.html */
gulp.task('css-merge-minify', () => {
    return gulp.src(['./src/css/*.css'])
        .pipe(concat('all.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css/'));
});

/*minify javascript files of index.html*/
gulp.task('scripts1', () => {
    return gulp.src(['./src/js/perfmatters.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

/*minification of images for index.html. Images in the img folder only*/
gulp.task('img', () => {
    return gulp.src('./src/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'));
});

/* optimization of images for pizza.html and index.html (pizzeria-min.png and pizza-min.png)
 * the original images were optimized and resized already with the help of the following two resources:
 * http://optimizilla.com/
 * http://www.picresize.com/
 */
gulp.task('images', () => {
    return gulp.src([ './src/views/images/*-min.jpg', './src/views/images/*-min.png' ])
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images/'));
});

/*move index.html file to dist folder*/
gulp.task('copy-root-files', () => {
    return gulp.src(['./src/index.html'])
        .pipe(gulp.dest('./dist/'));
});

/*minify index.html and move it to the dist folder*/
gulp.task('htmlmin', ['replace-with-allmincss'], () => {
    return gulp.src('./dist/index.html')
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS:true, minifyJS:true}))
        .pipe(gulp.dest('./dist/'));
});

/*converts blocking css elements into non-blocking elements for pizza.html*/
gulp.task('critical-2', () => {
    return gulp.src('./src/views/pizza.html')
	.pipe(critical({base: './src/views/', inline: true, css:['./src/views/css/bootstrap-grid.css','./src/views/css/style.css']}))
        .pipe(gulp.dest('./dist/views/'));
});

/*minify js file for pizza.html and moves it to the dist folder*/
gulp.task('pizza-script', () => {
    return gulp.src(['./src/views/js/main.js'])
	.pipe(uglify())
	.pipe(gulp.dest('./dist/views/js/'));
});

/*move css files of pizza.html to the dist folder*/
gulp.task('pizza-cssmin', ['critical-2', 'css-merge-minify-2'], () => {
    return gulp.src(['./src/views/css/*.css'])
        .pipe(gulp.dest('./dist/views/css/'));
});

/*merge css files for pizza.html*/  
gulp.task('css-merge-minify-2', () => {
    return gulp.src(['./src/views/css/*.css'])
        .pipe(concat('all.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./src/views/css/'));
});

/*minify pizza.html in the dist folder*/
gulp.task('htmlmin-2', ['critical-2'], () => {
    return gulp.src('./dist/views/pizza.html')
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS:true, minifyJS:true}))
        .pipe(gulp.dest('./dist/views/'));
});

gulp.task('default', ['css-merge-minify','scripts1', 'copy-root-files', 'img', 'htmlmin', 'replace-with-allmincss', 'critical', 'images', 'critical-2', 'pizza-script', 'pizza-cssmin', 'css-merge-minify-2', 'htmlmin-2']);

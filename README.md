# Website Performance Optimization portfolio project
Our challenge was to optimize [this online portfolio](https://github.com/MichelML/frontend-nanodegree-websiteoptimization) for speed. In particular, we needed to optimize the critical rendering path and make these pages render as quickly as possible by applying the techniques we have picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

This project was divided in two parts: 
1. Optimize PageSpeed Insights score for index.html (must score 90 for mobile and desktop) 
2. Optimize Frames per Second in pizza.html

The final web pages for the two parts of the project are accessible here: 
- [Part 1 - index.html](https://michelml.github.io/frontend-nanodegree-websiteoptimization/dist/)
- [Part 2 - pizza.html](https://michelml.github.io/frontend-nanodegree-websiteoptimization/dist/views/pizza.html)

## Part 1 - Optimize PageSpeed Insights score for index.html
Steps taken to obtain a score of 90 for mobile and desktop were: 
1. Optimization of CSS rules rendering by eliminating blocking CSS rules 
2. Merging and minification of CSS files 
3. Optimization of images in the `img` folder 
    * [Optimizilla](http://optimizilla.com/) was used to compress the files 
    * [PicResize](http://www.picresize.com/) was used to resize images size 
4. Minifying JavaScript files 
5. Minifying index.html 

## Part 2 - Optimize Frames Per Second in pizza.html
Steps taken to obtain 1) a rendering of 60 fps when scrolling, and 2) an operation duration of under 5ms when resizing the pizzas: 
1. Optimized CSS rendering by eliminating blocking CSS rules 
2. Merged and minified CSS files 
3. Optimized and resized images 
    * [Optimizilla](http://optimizilla.com/) was used to compress the files 
    * [PicResize](http://www.picresize.com/) was used to resize images size 
4. Refactored the pizza resizing function to resize the pizzas under 5ms 
5. Eliminated the moving pizzas background in main.js and index.html 
6. minified main.js and pizza.html 
 


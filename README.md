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
6. Adding async tag to JavaScript files integrated in index.html

## Part 2 - Optimize Frames Per Second in pizza.html
Steps taken to obtain 1) a rendering of 60 fps when scrolling, and 2) an operation duration of under 5ms when resizing the pizzas:   

1. Optimization of CSS rules rendering by eliminating blocking CSS rules  
2. Merging and minification of CSS files  
3. Optimization and resizing of images  
  * [Optimizilla](http://optimizilla.com/) was used to compress the files  
  * [PicResize](http://www.picresize.com/) was used to resize images size  
4. Refactoring the pizza resizing function in __main.js__ in order to resize the pizzas under 5ms time  
5. Eliminating the moving pizzas background in main.js and index.html  
6. Minification of main.js and pizza.html  
 
## About the process

Most of the tasks were automated with [Gulp](http://gulpJS.com/). However, some tasks were done by hand since it did not make sense to automate them due to their singularity (needed to be executed one time) or complexity:  

1. Code changes in HTML, CSS, and JS files  
2. Optimization and resizing of images  
3. Removing files that were not necessary for the exercise  

## Task runner installation  

You can run the task runner easily by doing the following steps (Note that you will need to have `npm`, `node.js` installed locally on your computer. You will also need to have gulp installed globally by running `npm install -g gulp` from your terminal):  

#### Step 1  
Clone the current repository in your prefered local directory:   

``` 
git clone https://github.com/MichelML/frontend-nanodegree-websiteoptimization.git  
cd frontend-nanodegree-websiteoptimization
```  

#### Step 2  
Run `npm install` from your terminal to install the task runner dependencies.  

#### Step 3  
You can now run the default task runner located in __gulpfile.js__ simply by typing `gulp` into your terminal.  
  
You can also run specific task from __gulpfile.js__ by typing `gulp <name of the task>` into your terminal.  
  
## Other tools utilized for the project  

* [Chrome Developer Tools](https://developer.chrome.com/devtools) by Google 
* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) by Google

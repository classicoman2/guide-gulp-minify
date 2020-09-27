# guide-gulp-minify
Minify Gulp for a CSS + JS project

## How to

Fa tres coses,
 - Passa 1: Minificar el js de la carpeta `/js` al directori `/build`.Alerta amb els subdirectoris dels fitxers, si no estan ben indicats, fallarà l'execució de `Gulp`.
 - Passa 2: Minificar el CSS
 - Passa 3: Minificar el HTML
 - Passa 4: fer que gulp esborri el directori `build` en el començament de l'execució, per eliminar fitxers antics.

### Com emprar-ho en el meu projecte? 
 - Simplement copia i aferra el fitxer `gulpfile.js` al directori arrel del teu projecte i modifica les rutes, si fa falta. Abans de res, però cal instal·lar les dependències.

 ### Dependencies

Javascript transpilation:

  `$ npm install --save-dev gulp browserify babelify @babel/core @babel/preset-env vinyl-source-stream`

Javascript minification:

  `$ npm install --save-dev vinyl-buffer gulp-uglify`

CSS minification:

  `$ npm install --save-dev gulp-postcss cssnano`

HTML minification:

  `$ npm install --save-dev gulp-htmlmin`

Keep things tidy:

  `$ npm install --save-dev del`

## Execució

`$ gulp build`

## Webgrafia

- [Transpile and minify Javascript, HTML and CSS using Gulp 4](https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4)
- [Getting Started with Browserify](https://scotch.io/tutorials/getting-started-with-browserify#toc-setting-up-with-gulp) - Integrate **Browserify** with **Gulp** 


![logo](./logo-classicoman-optim.png)

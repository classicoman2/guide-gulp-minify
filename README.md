# guide-gulp-minify
Minify Gulp for a HTML5 + CSS + JS project

## Què pèrmet

 - 1: Minificar el js de la carpeta `/js` al directori `/build` (Alerta amb els subdirectoris dels fitxers, si no estan ben indicats, fallarà l'execució de `Gulp`)
 - 2: Minifica el codi CSS3
 - 3: Minificar el codi  HTML5
 - 4: Gulp esborra el contingut del directori `build` en el començament de l'execució per eliminar fitxers antics.

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

All together,

  `$ npm install --save-dev gulp browserify babelify @babel/core @babel/preset-env vinyl-source-stream vinyl-buffer gulp-uglify gulp-postcss cssnano gulp-htmlmin del`

## Execució

`$ gulp build`

## Webgrafia

- [Transpile and minify Javascript, HTML and CSS using Gulp 4](https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4)
- [Getting Started with Browserify](https://scotch.io/tutorials/getting-started-with-browserify#toc-setting-up-with-gulp) - Integrate **Browserify** with **Gulp** 


![logo](./logo-classicoman-optim.png)

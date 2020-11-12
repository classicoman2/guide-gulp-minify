# guide-gulp-minify
Minify Gulp for a HTML5 + CSS + JS project

## Què pèrmet

 - 1: Gulp esborra el contingut del directori `dist` en el començament de l'execució per eliminar fitxers antics.
 - 2: Minifica i guarda a dins de `/dist/js`:
   - el js de la carpeta `/js`
   - el codi CSS3 de la carpeta `css` 
   - el codi HTML5 de la carpeta `src`
   - les imatges de la carpeta `images`

(Alerta amb els subdirectoris dels fitxers, si no estan ben indicats, fallarà l'execució de `Gulp`)

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

Images minification:

  `$ npm install --save-dev gulp-imagemin`

Keep things tidy:

  `$ npm install --save-dev del`

## Execució

`$ gulp build`

## Webgrafia

- [Transpile and minify Javascript, HTML and CSS using Gulp 4](https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4)
- [Getting Started with Browserify](https://scotch.io/tutorials/getting-started-with-browserify#toc-setting-up-with-gulp) - Integrate **Browserify** with **Gulp** 


![logo](./logo-classicoman-optim.png)

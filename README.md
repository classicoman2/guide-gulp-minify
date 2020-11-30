# guide-gulp-minify
Minify Gulp for a HTML5 + CSS + JS project

## Què fa

- 1: Crea un directori `dist`. Si ja existeix, borra el seu contingut. 
- 2: Copia el codi HTML de `src` a `dist`
- 3: Minifica el codi dins de `src/js` a dins de `dist/js`
- 4: Minifica el codi CSS de `src/css` a dins de `dist/css`
- 5: Optimitza les imatges de `src/images` a dins de `dist/images`

(Alerta amb els subdirectoris dels fitxers, si no estan ben indicats, fallarà l'execució de `Gulp`)

### Com emprar-ho en el meu projecte? 
 - Simplement copia i aferra el fitxer `gulpfile.js` al directori arrel del teu projecte i modifica les rutes, si fa falta. Abans de res, però cal instal·lar les dependències.

 ### Dependencies

Install Gulp,

 `npm install gulp`

Javascript transpilation:

  `npm install --save-dev gulp browserify babelify @babel/core @babel/preset-env vinyl-source-stream`

Javascript minification:

  `npm install --save-dev vinyl-buffer gulp-uglify`

CSS minification:

  `npm install --save-dev gulp-postcss cssnano`

HTML minification:

  `npm install --save-dev gulp-htmlmin`

Images minification:

  `install --save-dev gulp-imagemin`

Keep things tidy:

  `install --save-dev del`

## Execució

`gulp build`

## Webgrafia

- [Transpile and minify Javascript, HTML and CSS using Gulp 4](https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4)
- [Getting Started with Browserify](https://scotch.io/tutorials/getting-started-with-browserify#toc-setting-up-with-gulp) - Integrate **Browserify** with **Gulp** 


![logo](./logo-classicoman-optim.png)

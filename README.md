# guide-gulp-minify
Minify Gulp for a CSS + JS project

## How to

Segueixo [aquest tutorial](https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4).

Fa tres coses,
 - Passa 1: Minificar el js i ficar-lo dins una carpeta /build. Se suposa que el codi està en una carpeta /js. Alerta, que s'han d'indicar els subdirectoris dels fitxers, si no, `Gulp` fallarà en executar-se
 - Passa 2: Minificar el CSS
 - Passa 3: Minificar el HTML
 - Passa 4: fer que gulp esborri el directori `build` en el començament de l'execució, per eliminar fitxers antics.

 Com ho farem nosaltres: 
 - Molt fàcil, simplement copiar i aferrar el fitxer `gulpfile.js` i modificar les rutes, si fa falta. Abans de res, però cal **instal·lar les dependències indicades en el tutorial**

Javascript transpilation:
  `$ npm install --save-dev gulp browserify babelify @babel/core @babel/preset-env vinyl-source-stream`

Javascript minification:
  `$ npm install --save-dev vinyl-buffer gulp-uglify`

HTML minification
  `$ npm install --save-dev gulp-htmlmin`

CSS minification
  `$ npm install --save-dev gulp-postcss cssnano`

Keep things tidy
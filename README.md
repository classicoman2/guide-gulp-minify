# guide-gulp-minify
Minify Gulp for a CSS + JS project

## How to

Fa tres coses,
 - Passa 1: Minificar el js de la carpeta `/js` al directori `/build`.Alerta amb els subdirectoris dels fitxers, si no estan ben indicats, fallarà l'execució de `Gulp`.
 - Passa 2: Minificar el CSS
 - Passa 3: Minificar el HTML
 - Passa 4: fer que gulp esborri el directori `build` en el començament de l'execució, per eliminar fitxers antics.

 Com ho farem nosaltres: 
 - Molt fàcil, simplement copiar i aferrar el fitxer `gulpfile.js` i modificar les rutes, si fa falta. Abans de res, però cal instal·lar les dependències.

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

Segueixo [aquest tutorial](https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4).

El Gist del tutorial ens passa [aquest fitxer final](https://gist.github.com/BobbieGoede/dfc1ed93674f53b20086a77df1d56277)
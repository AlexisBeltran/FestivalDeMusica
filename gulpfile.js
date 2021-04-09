const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Función que compila SASS

const paths = {
    imagen: 'src/img/**/*',
    js: 'src/js/**/*.js'
}
function css(){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css')) 
}
function MinificarCSS(){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}
function javascript(){
    return src(paths.js)
        .pipe(concat('bundled.js'))
        .pipe(dest('./build/js'));
}
function imagenes(){
    return src(paths.imagen)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({
            message:'Imagen Minificada'
        }));
}
function versionWebp(){
    return src(paths.imagen)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({
            message: 'Version Webp Lista'
        }));
}
function WatchArchivos(){
    watch('src/scss/**/*.scss', css); // * = La carpeta actual - ** = Todos los archivos con esa extensión
    watch(paths.js, javascript);
}

exports.css = css;
exports.MinificarCSS = MinificarCSS;
exports.imagenes = imagenes;
exports.default =  series(css, javascript, imagenes, versionWebp, WatchArchivos);
exports.WatchArchivos = WatchArchivos;
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// regra para o sass virar css
gulp.task('css', function(){
  return gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
});

// adicionar bibliotecas, lembrando que a ordem é importante, bootstrap precisa do jquery, então jquery tem que vir antes
gulp.task('js', function(){
  return gulp
    .src([
      'node_modules/sigma/build/sigma.min.js',
      'node_modules/sigma/build/plugins/sigma.plugins.animate.min.js',
      'node_modules/sigma/build/plugins/sigma.layout.noverlap.min.js',
      'node_modules/sigma/build/plugins/sigma.renderers.customEdgeShapes.min.js',
      // 'node_modules/bootstrap/dist/js/bootstrap.min.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('grafo-componentes.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js'))
});

// adicionar páginas ['src/js/about.js'] => ['src/js/about.js','src/js/contact.js']
// gulp.task('pages', function(){
//   return gulp
//     .src(['src/js/about.js'])
//     .pipe(gulp.dest('js'))
// });

// regra geral que vale ao digitar apenas gulp
// gulp.task('default', [ 'css', 'js', 'pages' ]);
gulp.task('default', [ 'css','js' ]);

// regra para o gulp watch
gulp.task('watch', function() {

  gulp.run('default');

  gulp.watch('scss/*.scss', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('css');
  });

  gulp.watch('src/**/*.js', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('default');
  });

});

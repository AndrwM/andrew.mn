var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(), // this is an arbitrary object that loads all gulp plugins in package.json.
    path            = require('path'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    del             = require('del'),
    fs              = require('fs'),
    concat          = require('gulp-concat'),
    deploy          = require('gulp-gh-pages'),
    gulpif          = require('gulp-if'),
    mainBowerFiles  = require('main-bower-files')
    argv            = require('yargs').argv,
    wiredep         = require('wiredep').stream;



//---------------------- COMPILE

gulp.task('styles', function() {
  return gulp.src('./src/assets/stylesheets/**/*.{scss,sass}')
    .pipe($.sass({
      includePaths: ['./src/assets/stylesheets']
    }))
    .pipe(gulp.dest('./dist/assets/stylesheets'));
});

gulp.task('vendor-styles', function() {
  return gulp.src(mainBowerFiles('**/*.css' ,{debugging:true}))
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./dist/assets/stylesheets/'));
});

gulp.task('scripts', function() {
  return gulp.src('src/assets/scripts/*.js')
    .pipe($.plumber())
    .pipe( $.browserify({
      debug: true
    }))
    .pipe(
      gulpif( argv.production, $.uglify() )
    )
    .pipe( $.rename('main.js'))
    .pipe( gulp.dest('dist/assets/scripts/'));
});

gulp.task('vendor-scripts', function() {
  return gulp.src(mainBowerFiles('**/*.js' ,{debugging:true}))
    .pipe(concat('vendor.js'))
    .pipe(
      gulpif( argv.production, $.uglify() )
    )
    .pipe(gulp.dest('./dist/assets/scripts/'));
});

gulp.task('images', function() {
  return gulp.src('./src/assets/images/**/*')
    .pipe($.imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./dist/assets/images'))
})

gulp.task('files', function() {
  return gulp.src([
        './src/CNAME',
    ])
    .pipe(gulp.dest('./dist/'))
})

gulp.task('fonts', function() {
  // return gulp.src('./src/assets/fonts/**/*.{otf,woff,ttf,svg,eot}')
  return gulp.src('./src/assets/fonts/**/*')
    .pipe(gulp.dest('./dist/assets/fonts'))
})

gulp.task('templates', function() {
  // Disable partials from being renderd.
  return gulp.src(['src/**/!(_)*.jade'])
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .pipe( gulp.dest('dist/') )
});

//---------------------- UTILS

gulp.task('clean', function(cb) {
  del('./dist', cb);
});

//---------------------- SERVE & BUILD

gulp.task('browser-sync', function() {
  browserSync({
    open: false,
    server: {
      baseDir: "./dist",
      // baseDir: "./.publish",
    }
  });
});

gulp.task('build', ['styles', 'vendor-styles', 'scripts', 'vendor-scripts', 'templates', 'images', 'fonts', 'files']);

gulp.task('serve', ['build', 'browser-sync'], function () {
  gulp.watch('src/assets/stylesheets/**/*.{scss,sass}',['styles', reload]);
  gulp.watch('src/assets/scripts/*.js',['scripts', reload]);
  gulp.watch('src/assets/images/**/*',['images', reload]);
  gulp.watch('src/**/*.jade',['templates', reload]);
});

//---------------------- DEPLOY YO

gulp.task('deploy', ['build'], function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

//---------------------- GUlP DEFAULT

gulp.task('default', ['serve']);









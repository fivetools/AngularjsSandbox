var gulp = require("gulp");
var karma = require("gulp-karma");
var nodemon = require("gulp-nodemon"); //https://www.npmjs.com/package/gulp-nodemon - monitors changed files
var browserify = require("browserify");
var es6ify = require("es6ify");
var source = require("vinyl-source-stream");
var watch = require("gulp-watch");
var usemin = require("gulp-usemin"); //https://www.npmjs.com/package/gulp-usemin - updates references to js, css within html files
//var uglify = require("gulp-uglify"); //used to uglifyjs your js files
var minifyCss = require("gulp-minify-css");
//var rev = require("gulp-rev");//used for static revisioning of static js, css files by appending a hash to the file name
var minifyHtml = require("gulp-minify-html");
var less = require("gulp-less");
var path = require("path");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var args = require("yargs");

gulp.task("start", function() {
    nodemon({
        script: "server.js",
        ext: "js html",
        ignore: "compiled/*",
        env: { "NODE_ENV": "development" }
    }).on("restart", ["js:debug"]);
});

gulp.task("less:compile", function () {

    return gulp.src("./app.less")
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit("end");
            }
        }))
        .pipe(less({
            paths: ["./bower_components/bootstrap/less"]
        }))
        .pipe(rename("styles.css"))
        //.pipe(minifyCss())
        //.pipe(rename('style.min.css'))
        .pipe(gulp.dest("./compiled"));

});

gulp.task("js:compile", function () {

    return browserify("./app.js")
      .transform(es6ify)
      .bundle()
      .on("error", function (err) {
          console.log(err);
          this.emit("end");
      })
      .pipe(source("app.js"))
      .pipe(gulp.dest("./compiled"));
});

gulp.task("js:debug", function () {

    return browserify("./app.js", {debug: true})
      .transform(es6ify)
      .bundle()
      .on("error", function (err) {
          console.log(err);
          this.emit("end");
      })
      .pipe(source("app.js"))
      .pipe(gulp.dest("./compiled"));
});

gulp.task("less:watch", function () {

    gulp.watch("./app.less", ["less:compile"]); //contains import directives  
    gulp.watch("./css/*.less", ["less:compile"]); //settings
    gulp.watch("./bower_components/**/*.less", ["less:compile"]); //all installed bower dependencies
    gulp.watch("./modules/**/*.less", ["less:compile"]); //all module less files

}); 


gulp.task('js:watch', function () {
    gulp.watch("./app.js", ["dev"]); //app.js (start up file)
    gulp.watch("./modules/**/*.js", ["dev"]);//all module js files (angular controllers, services and directives)
});

var watcher;

function useKarma(autotest) {
    return function () {
        return gulp.src([
            "./bower_components/jquery/dist/jquery.js",
            "./bower_components/angular/angular.js",
            "./bower_components/angular-animate/angular-animate.js",
            "./app.js",
            "./test/spec/**/*.js"
        ])
          .pipe(karma({
              configFile: "karma.conf.js",
              action: autotest ? "watch" : "run"
          }));
    }
}

gulp.task("test", useKarma(false));
gulp.task("autotest", useKarma(true));

gulp.task("build", ["less:compile", "js:compile"]);
gulp.task("dev", ["less:compile", "js:debug", "start"]);

//gulp.task("app:dist", function () {
//    // gulp.src("./public/compiled/app.compiled_app")
//    //   .pipe(gulp.dest("dist/adminPortal/"));
//    gulp.src("./index.html")
//        .pipe(usemin({
//            css: [minifyCss()] //,rev()
//            //html: [minifyHtml({empty: true})],
//            //js: [uglify(), rev()]
//        }))
//        .pipe(gulp.dest("dist/adminPortal/"));

//    gulp.src("./modules/**/*.html")
//        .pipe(usemin({
//            //html: [minifyHtml({empty: true})],
//        }))
//        .pipe(gulp.dest("dist/adminPortal/modules/"));

//    gulp.src("./views/*.html")
//        .pipe(usemin({
//            //html: [minifyHtml({empty: true})],
//        }))
//        .pipe(gulp.dest("dist/adminPortal/views/"));

//    gulp.src("./img/*.*")
//        .pipe(gulp.dest("dist/adminPortal/img/"));

//    gulp.src("./fonts/*.*")
//        .pipe(gulp.dest("dist/adminPortal/fonts/"));
//});


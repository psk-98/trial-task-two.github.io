const { src, dest, watch, series } = require("gulp")
const terser = require("gulp-terser")
const sourcemaps = require("gulp-sourcemaps")
const concat = require("gulp-concat")

function minifyJS() {
  return src("dev/*.js")
    .pipe(sourcemaps.init())
    .pipe(terser({ toplevel: true }))
    .pipe(concat("main.js")) // not really necessary as one js file
    .pipe(sourcemaps.write("./"))
    .pipe(dest("docs/"))
}

function minifyCSS() {
  gulp.task("critical", ["build"], function () {
    critical.generate({
      inline: true,
      base: "./",
      src: "index.html",
      dest: "docs/index.html",
      minify: true,
      width: 320,
      height: 480,
    })
  })
}

function watchTask() {
  watch("*.js", minifyJS)
}

exports.default = series(minifyJS, watchTask)

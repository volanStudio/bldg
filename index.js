// dependencies for mnml

var fs = require("fs")
var autoprefixer = require("autoprefixer")
var compressor = require('node-minify')
var postcss = require("postcss")
var atImport = require("postcss-import")
var cssvariables = require('postcss-css-variables')
var nested = require("postcss-nested")
var conditionals = require('postcss-conditionals')
var customMedia = require("postcss-custom-media")

// css to be processed
var css = fs.readFileSync("src/bldgs.css", "utf8")

// process css
var output = postcss([autoprefixer])
  .use(atImport())
  .use(cssvariables())
  .use(nested())
  .use(conditionals())
  .use(customMedia())
  .process(css, {
    from: "./src/bldgs.css",
    to: "./css/bldgs.css"
  })
  .css

fs.writeFile("css/bldgs.css", output, 'utf-8')

// Using Sqwish for CSS
new compressor.minify({
    type: 'sqwish',
    fileIn: './css/bldgs.css',
    fileOut: './css/bldgs.min.css'
});

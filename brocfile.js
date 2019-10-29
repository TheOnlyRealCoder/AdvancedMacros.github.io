// var Funnel = require("broccoli-funnel");
// var broccoli = require("broccoli");

const preamble = `Advanced Macros ©${new Date().getFullYear()}`;
const jsopts = {
  compress: {
    unsafe: true,
    passes: 2,
    keep_fargs: false,
    drop_console: false,
    arguments: true,
    inline: true
  },
  mangle: {
    properties: false,
    toplevel: true
  },
  output: {
    beautify: false,
    preamble: '/* ' + preamble + ' */',
    safari10: true,
    webkit: true,
    comments: 'some'
  },
  sourceMap: false
  // TODO: nameCache: {}
};
module.exports = (function () {
  var tree = '_site';
  const compileCSS = require('broccoli-postcss');
  var uglify = require('broccoli-uglify-sourcemap');
  var htmlmin = require('broccoli-htmlmin');
  tree = uglify(tree, {
    // exclude: [..], // array of globs, to not minify

    uglify: jsopts,

    async: true // run uglify in parallel, defaults to false
    // concurrency: 3 // number of parallel workers, defaults to number of CPUs - 1
  });
  tree = compileCSS(tree, {
    sourceMap: false,
    plugins: [
      require('postcss-import'),
      require('postcss-css-variables')(/* options */),
      require('postcss-preset-env')({ stage: 4 }),
      require('autoprefixer')(),
      require('postcss-csso')
    ]
  });
  tree = htmlmin(tree, {
    collapseWhitespace: true,
    caseSensitive: true,
    collapseBooleanAttributes: true,
    processConditionalComments: true,
    quoteCharacter: '"',
    removeScriptTypeAttributes: true,
    sortAttributes: true,
    useShortDoctype: true,
    conservativeCollapse: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true
  });
  return tree;
})();

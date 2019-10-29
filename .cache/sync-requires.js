const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-templates-index-js": hot(preferDefault(require("D:\\mrkyel\\Goodi-blog\\src\\components\\templates\\index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\mrkyel\\Goodi-blog\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\mrkyel\\Goodi-blog\\src\\pages\\404.js")))
}


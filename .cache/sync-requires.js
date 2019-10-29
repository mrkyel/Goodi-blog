const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("D:\\mrkyel\\Goodi-blog\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-components-templates-blog-post-js": hot(preferDefault(require("D:\\mrkyel\\Goodi-blog\\src\\components\\templates\\blogPost.js"))),
  "component---src-components-templates-index-js": hot(preferDefault(require("D:\\mrkyel\\Goodi-blog\\src\\components\\templates\\index.js"))),
  "component---src-components-templates-index-4-category-js": hot(preferDefault(require("D:\\mrkyel\\Goodi-blog\\src\\components\\templates\\index4Category.js"))),
  "component---src-components-templates-index-4-tag-js": hot(preferDefault(require("D:\\mrkyel\\Goodi-blog\\src\\components\\templates\\index4Tag.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\mrkyel\\Goodi-blog\\src\\pages\\404.js")))
}


console.log('home pack')
var homeComponentRequireContext = require.context("components/home", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(homeComponentRequireContext)

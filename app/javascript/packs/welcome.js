console.log('welcome pack')
var welcomeComponentRequireContext = require.context("components/welcome", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(welcomeComponentRequireContext)

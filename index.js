var setInterval = require( 'dist' ).setInterval;
var setTimeout = require( 'dist' ).setTimeout;
var clearInterval = require( 'dist' ).clearInterval;
var clearTimeout = require( 'dist' ).clearTimeout;
module.exports = {
    setInterval,
    setTimeout,
    clearInterval,
    clearTimeout
}
module.exports.setInterval = setInterval;
module.exports.setTimeout = setTimeout;
module.exports.clearInterval = clearInterval;
module.exports.clearTimeout = clearTimeout;

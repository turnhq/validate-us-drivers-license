/**
 * List of supported US States as an array
 *
 * @example
 * const { supportedStates } = require('validate-us-drivers-license')
 *
 * const isSupported = currentStates.includes('IL')
 * console.log(isSupported) // true
 *
 * @name supportedStates
 */

var driversLicenseRegex = require("./license-regex");

module.exports = Object.keys(driversLicenseRegex);

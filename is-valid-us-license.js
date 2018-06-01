/**
 * Validates a US Drivers License given a two letter abbreviation of the US
 * State to validate it in.
 *
 * @param {string} license Drivers License to validate.
 * @param {string} state Two Character Abbreviation for the US State to validate
 * the license in.
 *
 * @returns {boolean} Whether the license is valid or not.
 *
 * @example
 * const { isValidUSLicense } = require('validate-us-drivers-license')
 *
 * const valid = isValidUSLicense('1234567', 'AL')
 * console.log(valid) // true
 *
 * @name isValidUSLicense
 */

var driversLicenseRegex = require("./license-regex");

module.exports = function(license, state) {
  if (typeof license !== "string" || typeof state !== "string") return false;
  var validators = driversLicenseRegex[state];
  if (!validators) return false;
  var reasons = validator
    .filter(function(val) {
      return !val.regex.test(license);
    })
    .map(function(val) {
      return val.description;
    });
  return reasons.length < validators.length;
};

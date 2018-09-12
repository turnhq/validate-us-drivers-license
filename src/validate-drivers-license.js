/**
 * Validates a US Drivers License given a two letter abbreviation of the US
 * State to validate it in.
 * Similar to isValidUSLicense but returns an object with a 'valid'
 * boolean property for the validation itself, as well as a reasons array that
 * attempts to explain the result
 *
 * @param {string} license Drivers License to validate.
 * @param {string} state Two Character Abbreviation for the US State to validate
 * the license in.
 *
 * @returns {object} Object containing the result of the validation and a reasons
 * array.
 *
 * @example
 * const { validateUSDriversLicense } = require('validate-us-drivers-license')
 *
 * const validLicense = validateUSDriversLicense('1234567', 'AL')
 * console.log(validLicense.valid) // true
 * const validLicense = validateUSDriversLicense('12345678', 'AL') //
 * console.log(validLicense.reasons) // ['License must be 1-7 numbers']
 *
 * @name validateUSDriversLicense
 */

var driversLicenseRegex = require("./license-regex");

module.exports = function(license, state) {
  if (typeof license !== "string" || typeof state !== "string") {
    return { valid: false, reasons: ['License and State must be Strings'] };
  }
  var validators = driversLicenseRegex[state];
  if (!validators) return { valid: false, reasons: ['Not a valid US State'] };
  const cleanLicense = license.replace(/[\s-]/g, '');
  var reasons = validators
    .filter(function(val) {
      return !val.regex.test(cleanLicense);
    })
    .map(function(val) {
      return val.description;
    });
  return { valid: reasons.length < validators.length, reasons }
};

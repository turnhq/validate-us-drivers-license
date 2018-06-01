var driversLicenseRegex = require("./src/license-regex");
var isValidUSLicense = require("./src/is-valid-us-license");
var validateUSDriversLicense = require("./src/validate-drivers-license");

module.exports = {
  driversLicenseRegex: driversLicenseRegex,
  isValidUSLicense: isValidUSLicense,
  validateUSDriversLicense: validateUSDriversLicense
};

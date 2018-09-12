var driversLicenseRegex = require("./src/license-regex");
var isValidUSLicense = require("./src/is-valid-us-license");
var validateUSDriversLicense = require("./src/validate-drivers-license");
var supportedStates = require("./src/supported-states");

module.exports = {
  driversLicenseRegex: driversLicenseRegex,
  isValidUSLicense: isValidUSLicense,
  validateUSDriversLicense: validateUSDriversLicense,
  supportedStates: supportedStates
};

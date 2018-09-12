var expect = require('chai').expect
var _ = require('lodash')
var validateDriversLicense = require('../index').validateUSDriversLicense
var testLicenses = require('./data/test-licenses')

var sampleLicense = '1234567'

var testLicense = function(state, validLicenses, invalidLicenses, lowercase = false) {
  var validLicenses = validLicenses || []
  var invalidLicenses = invalidLicenses || []
  describe(state + ' State', function() {
    _.forEach(validLicenses, function(license) {
      it('validateDriversLicense returns an object with valid = true for license' + license, function() {
        expect(validateDriversLicense(lowercase ? license.toLowerCase() : license, state).valid).to.be.true
      });
    })
    _.forEach(invalidLicenses, function(license) {
      it('validateDriversLicense returns an object with valid = false for license' + license, function() {
        expect(validateDriversLicense(lowercase ? license.toLowerCase() : license, state).valid).to.be.false
      });
    })
  });
}

describe('validateDriversLicense', function() {
  describe('When called without params', function() {
    it('validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense()).to.deep.equal({
        valid: false, reasons: ['License and State must be Strings']
      });
    });
  });
  describe('When called with a license that is not a string', function() {
    it('[Boolean] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense(true)).to.deep.equal({
        valid: false, reasons: ['License and State must be Strings']
      });
    });
    it('[Integer] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense(12)).to.deep.equal({
        valid: false, reasons: ['License and State must be Strings']
      });
    });
    it('[Object] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense({})).to.deep.equal({
        valid: false, reasons: ['License and State must be Strings']
      });
    });
    it('[Array] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense([])).to.deep.equal({
        valid: false, reasons: ['License and State must be Strings']
      });
    });
  });
  describe('When called with a State that is not in the list', function() {
    it('[Boolean] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense(sampleLicense, true)).to.deep.equal({
        valid: false, reasons: ['License and State must be Strings']
      });
    });
    it('[Integer] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense(sampleLicense, 12)).to.deep.equal({
        valid: false, reasons: ['License and State must be Strings']
      });
    });
    it('[Object] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense(sampleLicense, {})).to.deep.equal({
        valid: false, reasons: ['License and State must be Strings']
      });
    });
    it('[Array] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense(sampleLicense, [])).to.deep.equal({
        valid: false, reasons: ['License and State must be Strings']
      });
    });
    it('[Empty String] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense(sampleLicense, '')).to.deep.equal({
        valid: false, reasons: ['Not a valid US State']
      });
    });
    it('[Unexisting state] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense(sampleLicense, 'ZZ')).to.deep.equal({
        valid: false, reasons: ['Not a valid US State']
      });
    });
    it('[Full Name Of State] validateDriversLicense returns an object with valid=false and reason', function() {
      expect(validateDriversLicense(sampleLicense, 'Alabama')).to.deep.equal({
        valid: false, reasons: ['Not a valid US State']
      });
    });
  });
  describe('Driver License State Regex', function() {
    _.forEach(testLicenses, function(regex, state) {
      testLicense(state, regex.validLicenses, regex.invalidLicenses)
    })
  })
  describe('Driver License State Regex lowercase', function() {
    _.forEach(testLicenses, function(regex, state) {
      testLicense(state, regex.validLicenses, regex.invalidLicenses, true)
    })
  })
});

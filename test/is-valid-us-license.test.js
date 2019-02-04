var expect = require('chai').expect
var _ = require('lodash')
var isValidUSLicense = require('../src/index').isValidUSLicense
var testLicenses = require('./data/test-licenses')

var sampleLicense = '1234567'

var testLicense = function(state, validLicenses, invalidLicenses, lowercase = false) {
  var validLicenses = validLicenses || []
  var invalidLicenses = invalidLicenses || []
  describe(state + ' State', function() {
    _.forEach(validLicenses, function(license) {
      it('isValidUSLicense returns for license' + license, function() {
        expect(isValidUSLicense(lowercase ? license.toLowerCase() : license, state)).to.be.true
      });
    })
    _.forEach(invalidLicenses, function(license) {
      it('isValidUSLicense returns false for license' + license, function() {
        expect(isValidUSLicense(lowercase ? license.toLowerCase() : license, state)).to.be.false
      });
    })
  });
}

describe('isValidUSLicense', function() {
  describe('When called without params', function() {
    it('isValidUSLicense returns false', function() {
      expect(isValidUSLicense()).to.be.false
    });
  });
  describe('When called with a license that is not a string', function() {
    it('[Boolean] isValidUSLicense returns false', function() {
      expect(isValidUSLicense(true)).to.be.false
    });
    it('[Integer] isValidUSLicense returns false', function() {
      expect(isValidUSLicense(12)).to.be.false
    });
    it('[Object] isValidUSLicense returns false', function() {
      expect(isValidUSLicense({})).to.be.false
    });
    it('[Array] isValidUSLicense returns false', function() {
      expect(isValidUSLicense([])).to.be.false
    });
  });
  describe('When called with a State that is not in the list', function() {
    it('[Boolean] isValidUSLicense returns false', function() {
      expect(isValidUSLicense(sampleLicense, true)).to.be.false
    });
    it('[Integer] isValidUSLicense returns false', function() {
      expect(isValidUSLicense(sampleLicense, 12)).to.be.false
    });
    it('[Object] isValidUSLicense returns false', function() {
      expect(isValidUSLicense(sampleLicense, {})).to.be.false
    });
    it('[Array] isValidUSLicense returns false', function() {
      expect(isValidUSLicense(sampleLicense, [])).to.be.false
    });
    it('[Empty String] isValidUSLicense returns false', function() {
      expect(isValidUSLicense(sampleLicense, '')).to.be.false
    });
    it('[Unexisting state] isValidUSLicense returns false', function() {
      expect(isValidUSLicense(sampleLicense, 'ZZ')).to.be.false
    });
    it('[Full Name Of State] isValidUSLicense returns false', function() {
      expect(isValidUSLicense(sampleLicense, 'Alabama')).to.be.false
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

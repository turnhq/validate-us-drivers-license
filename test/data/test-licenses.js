var invalidLicenses = ['test']

var sevenDigitLicense = ['1', '12', '123', '1234', '12345', '123456', '1234567', '123-456-7', '123 456 7'];
var oneLetterThreeToSixNumbers = ['A123', 'A1234', 'A12345', 'A123456', 'A-123-456', 'A12 345 6'];
var twoLettersTwoToFiveNumbers = ['AB12', 'AB123', 'AB1234', 'AB12345', 'AB-12', 'AB-123', 'AB 1234', 'AB 123 45'];
var twoLettersSevenNumbers = ['AB1234567', 'AB123-456-7', 'AB123 456 7'];
var oneLetterThreeToEightNumbers = ['A123', 'A1234', 'A12345', 'A123456', 'A-123-456', 'A12 345 6', 'A1234567', 'A-123-456-7', 'A123 456 7', 'A12345678', 'A-123-456-78', 'A123 456 78'];
var oneLetterSixNumbers = ['A123456'];
var oneLetterSevenNumbers = ['A1234567', 'A-123-456-7', 'A 123 456 7'];
var oneLetterEightNumbers = ['A12345678', 'A-123-456-78', 'A 123 456 78'];
var oneLetterNineNumbers = ['A123456789', 'A-123-456-789', 'A 123 456 789']
var tenNumbers = ['1234567890', '123-456-789-0', '123 456 789 0'];
var nineNumbers = ['123456789', '123-456-789', '123 456 789'];
var eightNumbers = ['12345678', '123-456-78', '123 456 78'];
var sevenNumbers = ['1234567', '123-456-7', '123 456 7'];
var sixNumbers = ['123456', '123-456', '123 456'];
var fiveNumbers = ['12345', '123-45', '123 45'];
var threeNumbers = ['123'];
var nineDigitLicense = [].concat(sevenDigitLicense, eightNumbers, nineNumbers);
var oneLetterTwelveNumbers = ['A123456789012', 'A-123-456-789-012', 'A 123 456 789 012'];


module.exports = {
  PR: {
    validLicenses: [].concat(sevenNumbers, eightNumbers, nineNumbers),
    invalidLicenses: [].concat(invalidLicenses, "A1", "A12", "A123")
  },
  AL: {
    validLicenses: [].concat(sevenNumbers, eightNumbers, oneLetterSixNumbers, oneLetterSevenNumbers),
    invalidLicenses: [].concat(invalidLicenses, nineNumbers)
  },
  AK: {
    validLicenses: sevenNumbers,
    invalidLicenses: [].concat(invalidLicenses, nineNumbers, eightNumbers)
  },
  AZ: {
    validLicenses: [].concat(nineNumbers, oneLetterEightNumbers),
    invalidLicenses: [].concat('A', 'AB').concat(invalidLicenses, sevenDigitLicense)
  },
  AR: {
    validLicenses: [].concat(nineNumbers, oneLetterEightNumbers),
    invalidLicenses: [].concat('1', '12', '123', 'A', 'AB', '1234567890').concat(invalidLicenses)
  },
  CA: {
    validLicenses: [].concat('A1234567'),
    invalidLicenses: [].concat(
      invalidLicenses, sevenDigitLicense, twoLettersTwoToFiveNumbers,
      nineNumbers
    )
  },
  CO: {
    validLicenses: [].concat(nineNumbers),
    invalidLicenses: [].concat(invalidLicenses, sevenDigitLicense)
  },
  CT: {
    validLicenses: [].concat(nineNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, sevenDigitLicense, oneLetterThreeToSixNumbers,
      twoLettersTwoToFiveNumbers
    )
  },
  DE: {
    validLicenses: [].concat(threeNumbers, fiveNumbers, sixNumbers, sevenNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      nineNumbers
    )
  },
  DC: {
    validLicenses: [].concat('1234567').concat(nineNumbers, '1234567'),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers
    )
  },
  FL: {
    validLicenses: [].concat(oneLetterTwelveNumbers, 'A12345678901'),
    invalidLicenses: [].concat(invalidLicenses)
  },
  GA: {
    validLicenses: [].concat(nineNumbers, '1234567', eightNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense.slice(0, 6)
    )
  },
  GU: {
    validLicenses: [].concat(tenNumbers),
    invalidLicenses: [].concat(invalidLicenses)
  },
  HI: {
    validLicenses: [].concat(nineNumbers, oneLetterEightNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  ID: {
    validLicenses: [].concat(nineNumbers, 'AB123456C'),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  IL: {
    validLicenses: [].concat('A12345678901'),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense, nineNumbers
    )
  },
  IN: {
    validLicenses: [].concat(nineNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  IA: {
    validLicenses: [].concat(nineNumbers, '123AB4567'),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  KS: {
    validLicenses: [].concat(nineNumbers, oneLetterEightNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  KY: {
    validLicenses: [].concat(nineNumbers, oneLetterEightNumbers, oneLetterNineNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  LA: {
    validLicenses: [].concat(nineDigitLicense),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers
    )
  },
  ME: {
    validLicenses: [].concat(eightNumbers, '1234567', '1234567A'),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense.slice(0, 6)
    )
  },
  MD: {
    validLicenses: [].concat(oneLetterTwelveNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  MA: {
    validLicenses: [].concat(oneLetterEightNumbers, twoLettersSevenNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  MI: {
    validLicenses: [].concat(oneLetterTwelveNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  MN: {
    validLicenses: [].concat(oneLetterTwelveNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  MS: {
    validLicenses: [].concat(nineNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  MO: {
    validLicenses: [].concat(
      nineNumbers, 'A12345', 'A123456', 'A1234567', 'A12345678', 'A123456789',
      'A123456R', '123456789A', '176A109015', '162B005002', '162B007002', 'A12345B', 'A123456B'
    ),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  MT: {
    validLicenses: [].concat(
      nineNumbers, '1234567890123', 'A1B34CDE5', 'A1234CDE5', 'AAA0000001234',
    ),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      sevenDigitLicense
    )
  },
  NE: {
    validLicenses: [].concat('A123456', 'A1234567', 'A12345678', oneLetterThreeToEightNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, sevenDigitLicense
    )
  },
  NV: {
    validLicenses: [].concat(nineNumbers, '1234567890', '123456789012', 'X12345678', oneLetterEightNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, sevenDigitLicense
    )
  },
  NH: {
    validLicenses: [].concat('12ABC34567', 'ABC12345678'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, sevenDigitLicense
    )
  },
  NJ: {
    validLicenses: [].concat('A12345678901234'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, sevenDigitLicense
    )
  },
  NM: {
    validLicenses: [].concat(eightNumbers, nineNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, sevenDigitLicense
    )
  },
  NY: {
    validLicenses: [].concat(eightNumbers, nineNumbers, 'A1234567'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, sevenDigitLicense
    )
  },
  NC: {
    validLicenses: [].concat(nineDigitLicense, '1234567890', '12345678901', '123456789012'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers
    )
  },
  ND: {
    validLicenses: [].concat(nineNumbers, 'ABC123456'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      sevenDigitLicense
    )
  },
  OH: {
    validLicenses: [].concat('AB123456'),
    invalidLicenses: [].concat(invalidLicenses, sevenDigitLicense)
  },
  OK: {
    validLicenses: [].concat(sevenNumbers, eightNumbers, nineNumbers, 'A123456789'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers
    )
  },
  OR: {
    validLicenses: [].concat(sixNumbers, sevenNumbers, eightNumbers, nineNumbers, oneLetterSixNumbers, '431ZD4', 'GAEYX0D', '94VKNF46', 'BDABFKAA9', ),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterNineNumbers, oneLetterNineNumbers,
      oneLetterTwelveNumbers, 'BPO6M', 'TZD6QON4NB'
    )
  },
  PA: {
    validLicenses: [].concat(eightNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      sevenDigitLicense
    )
  },
  RI: {
    validLicenses: [].concat('1234567', 'A123456'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers
    )
  },
  SC: {
    validLicenses: [].concat(
      '12345', '123456', '1234567', '12345678', '123456789', '1234567890',
      '12345678901'
    ),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers
    )
  },
  SD: {
    validLicenses: [].concat(
      '123456', '1234567', '12345678', '123456789'
    ),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers
    )
  },
  TN: {
    validLicenses: [].concat(eightNumbers, nineNumbers, '1234567'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers
    )
  },
  TX: {
    validLicenses: [].concat(fiveNumbers, sixNumbers, sevenNumbers, eightNumbers, '1234567'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers
    )
  },
  UT: {
    validLicenses: [].concat(
      '1234', '12345', '123456', '1234567', '12345678', '123456789', '1234567890'
    ),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers
    )
  },
  VI: {
    validLicenses: [].concat(tenNumbers),
    invalidLicenses: [].concat(invalidLicenses)
  },
  VT: {
    validLicenses: [].concat(eightNumbers, '1234567A', '1234567Z', sevenNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers
    )
  },
  VA: {
    validLicenses: [].concat(nineNumbers, 'T61473121'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      sevenDigitLicense
    )
  },
  WA: {
    validLicenses: [].concat('A**A**A**123', 'FHCXK1T9B4XE', 'B6EANAABRCB5', 'Y0NHQMEZO9KU'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      nineDigitLicense
    )
  },
  WI: {
    validLicenses: [].concat('A1234567890123'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      nineDigitLicense
    )
  },
  WV: {
    validLicenses: [].concat('1234567', 'AB12345', 'AB123456', '1A23456', oneLetterSixNumbers),
    invalidLicenses: [].concat(
      invalidLicenses
    )
  },
  WY: {
    validLicenses: [].concat(nineNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      sevenDigitLicense
    )
  },
}

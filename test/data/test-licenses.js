var invalidLicenses = ['test']

var sevenDigitLicense = ['1', '12', '123', '1234', '12345', '123456', '1234567'];
var oneLetterThreeToSixNumbers = ['A123', 'A1234', 'A12345', 'A123456'];
var twoLettersTwoToFiveNumbers = ['AB12', 'AB123', 'AB1234', 'AB12345'];
var oneLetterEightNumbers = ['A12345678']
var oneLetterNineNumbers = ['A123456789']
var nineNumbers = ['123456789'];
var eightNumbers = ['12345678'];
var nineDigitLicense = [].concat(sevenDigitLicense, eightNumbers, nineNumbers);
var oneLetterTwelveNumbers = ['A123456789012'];


module.exports = {
  AL: {
    validLicenses: sevenDigitLicense,
    invalidLicenses: [].concat(invalidLicenses, nineNumbers, eightNumbers)
  },
  AK: {
    validLicenses: sevenDigitLicense,
    invalidLicenses: [].concat(invalidLicenses, nineNumbers, eightNumbers)
  },
  AZ: {
    validLicenses: [].concat('A1', 'A12', 'A1234567').concat(
      nineNumbers, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      oneLetterEightNumbers
    ),
    invalidLicenses: [].concat('A', 'AB').concat(invalidLicenses, sevenDigitLicense)
  },
  AR: {
    validLicenses: [].concat('1234', '12345', '123456', '1234567').concat(
      nineNumbers, eightNumbers
    ),
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
    validLicenses: [].concat(
      twoLettersTwoToFiveNumbers, nineNumbers, oneLetterThreeToSixNumbers
    ),
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
    validLicenses: [].concat(sevenDigitLicense),
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
  GA: {
    validLicenses: [].concat(nineNumbers, '1234567', eightNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense.slice(0, sevenDigitLicense.length - 1)
    )
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
    validLicenses: [].concat(oneLetterTwelveNumbers, 'A12345678901'),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense, nineNumbers
    )
  },
  IN: {
    validLicenses: [].concat(nineNumbers, oneLetterNineNumbers, '1234567890'),
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
    validLicenses: [].concat(nineNumbers, oneLetterEightNumbers, 'A1B2C'),
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
      sevenDigitLicense.slice(0, sevenDigitLicense.length - 1)
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
    validLicenses: [].concat(oneLetterEightNumbers, nineNumbers),
    invalidLicenses: [].concat(
      invalidLicenses, oneLetterThreeToSixNumbers, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  MI: {
    validLicenses: [].concat(oneLetterTwelveNumbers, 'A1234567890'),
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
      'A123456R', '12345678AB', '123456789A'
    ),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers,
      sevenDigitLicense
    )
  },
  MT: {
    validLicenses: [].concat(
      'A12345678', nineNumbers, '1234567890123', '12345678901234'
    ),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      sevenDigitLicense
    )
  },
  NE: {
    validLicenses: [].concat('A123456', 'A1234567', 'A12345678'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, sevenDigitLicense
    )
  },
  NV: {
    validLicenses: [].concat(nineNumbers, '1234567890', '123456789012', 'X12345678'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, sevenDigitLicense
    )
  },
  NH: {
    validLicenses: [].concat('12ABC34567'),
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
    validLicenses: [].concat(
      eightNumbers, nineNumbers,
      'A1234567', 'A123456789012345678', '1234567890123456', 'ABCDEFGH'
    ),
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
    validLicenses: [].concat(
      eightNumbers, 'A1234', 'A12345', 'A123456', 'A1234567', 'A12345678',
      'AB123', 'AB1234', 'AB12345', 'AB123456', 'AB1234567'
    ),
    invalidLicenses: [].concat(invalidLicenses, sevenDigitLicense)
  },
  OK: {
    validLicenses: [].concat(nineNumbers, 'A123456789'),
    invalidLicenses: [].concat(
      invalidLicenses, sevenDigitLicense, twoLettersTwoToFiveNumbers,
      oneLetterThreeToSixNumbers
    )
  },
  OR: {
    validLicenses: [].concat(nineDigitLicense),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers
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
      '123456', '1234567', '12345678', '123456789', '1234567890', '123456789012'
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
    validLicenses: [].concat(eightNumbers, '1234567'),
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
  VT: {
    validLicenses: [].concat(eightNumbers, '1234567A'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      sevenDigitLicense
    )
  },
  VA: {
    validLicenses: [].concat(nineNumbers, 'A123456789', 'A1234567890', 'A12345678901'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      sevenDigitLicense
    )
  },
  WA: {
    validLicenses: [].concat('A**A**A**123'),
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
    validLicenses: [].concat('1234567', 'A12345', 'A123456', 'AB12345', 'AB123456'),
    invalidLicenses: [].concat(
      invalidLicenses
    )
  },
  WY: {
    validLicenses: [].concat(nineNumbers, '1234567890'),
    invalidLicenses: [].concat(
      invalidLicenses, twoLettersTwoToFiveNumbers, oneLetterThreeToSixNumbers,
      sevenDigitLicense
    )
  },
}
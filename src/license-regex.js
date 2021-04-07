/**
 * List of US Driver licenses regex
 * All credit for compiling this list goes to github user mikemfleming
 * You may see his original CLI version of this module here:
 * https://github.com/mikemfleming/state-drivers-license-regex
 * And to the original compiler of all the regex, github user adambullmer
 * You may see his original approach to this module (in PHP) here:
 * https://github.com/adambullmer/USDLRegex
 */

module.exports = {
  AL: [
    {
      regex: /^\d{7,8}$/,
      description: 'NNNNNNNNN MinLength = 7 MaxLength = 8'
    },
    {
      regex: /^[A-Z]\d{6,7}$/i,
      description: 'ANNNNNNNN MinLength = 7 MaxLength = 8'
    },
  ],
  AK: [
    {
      regex: /^\d{7}$/,
      description: 'NNNNNNNN MinLength = 7 MaxLength = 7',
    },
  ],
  AZ: [
    {
      regex: /^[A-Z]\d{8}$/i,
      description: 'ANNNNNNNN MinLength = 9 MaxLength = 9',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  AR: [
    {
      regex: /^[0-9]{9}$/,
      description: 'NNNNNNNNN MinLength = 9 MaxLength = 9',
    },
    {
      regex: /^[A-Z]\d{8}$/i,
      description: 'ANNNNNNNN MinLength = 9 MaxLength = 9',
    },
  ],
  CA: [
    {
      regex: /^[A-Z]{1}[0-9]{7}$/i,
      description: 'License must be 1 letter followed by 7 numbers',
    },
  ],
  CO: [
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  CT: [
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  DE: [
    {
      regex: /^\d{3,7}$/,
      description: 'License must be 3-7 numbers',
    },
  ],
  DC: [
    {
      regex: /^[0-9]{7}$/i,
      description: 'License must be 7 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    }
  ],
  FL: [
    {
      regex: /^[A-Z]{1}[0-9]{12}$/i,
      description: 'License must be 1 letter followed by 12 numbers',
    },
    {
      regex: /^[A-Z]\d{11}$/i,
      description: 'ANNNNNNNNNNN MinLength = 12 MaxLength = 12',
    },
  ],
  GA: [
    {
      regex: /^[0-9]{7,9}$/i,
      description: 'License must be 7-9 numbers',
    },
  ],
  GU: [
    {
      regex: /^\d{10}$/,
      description: 'NNNNNNNNNN MinLength = 10 MaxLength = 10',
    },
  ],
  HI: [
    {
      regex: /^[A-Z]{1}[0-9]{8}$/i,
      description: 'License must be 1 letter followed by 8 numbers'
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers'
    }
  ],
  ID: [
    {
      regex: /^[A-Z]{2}[0-9]{6}[A-Z]{1}$/i,
      description: 'License must be 2 letters followed by 6 numbers followed by 1 letter',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  IL: [
    {
      regex: /^[A-Z]{1}[0-9]{11}$/i,
      description: 'License must be 1 letter followed by 11 numbers',
    }
  ],
  IN: [
    {
      regex: /^[0-9]{9,10}$/i,
      description: 'License must be 9-10 numbers',
    },
  ],
  IA: [
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
    {
      regex: /^[0-9]{3}[A-Z]{2}[0-9]{4}$/i,
      description: 'License must be 3 numbers followed by 2 letters followed by 4 numbers',
    },
  ],
  KS: [
    {
      regex: /^[A-Z]{1}[0-9]{8}$/i,
      description: 'License must be 1 letter followed by 8 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  KY: [
    {
      regex: /^[A-Z]{1}[0-9]{8,9}$/i,
      description: 'License must be 1 letter followed by 8-9 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  LA: [
    {
      regex: /^[0-9]{1,9}$/i,
      description: 'License must be 1-9 numbers'
    },
  ],
  ME: [
    {
      regex: /^[0-9]{7}$/i,
      description: 'License must be 7 numbers',
    },
    {
      regex: /^[0-9]{7}[A-Z]{1}$/i,
      description: 'License must be 7 numbers followed by 1 letter',
    },
    {
      regex: /^[0-9]{8}$/i,
      description: 'License must be 8 numbers',
    },
  ],
  MD: [
    {
      regex: /^[A-Z]{1}[0-9]{12}$/i,
      description: 'License must be 1 letter followed by 12 numbers',
    },
  ],
  MA: [
    {
      regex: /(^[A-Z]{1}[0-9]{8}$|^[A-Z]{2}[0-9]{7}$)/i,
      description: 'License must be 1 letter followed by 8 numbers or 2 letters followed by 7 numbers',
    },
  ],
  MI: [
    {
      regex: /^[A-Z]{1}[0-9]{12}$/i,
      description: 'License must be 1 letter followed by 12 numbers',
    },
  ],
  MN: [
    {
      regex: /^[A-Z]{1}[0-9]{12}$/i,
      description: 'License must be 1 letter followed by 12 numbers'
    },
  ],
  MS: [
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  // TODO: Test remaining Licenses
  MO: [
    {
      regex: /^[A-Z]{1}[0-9]{5,9}$/i,
      description: 'License must be 1 letter followed by 5-9 numbers',
    },
    {
      regex: /^[A-Z]{1}[0-9]{6}[R]{1}$/i,
      description: 'License must be 1 letter followed by 6 numbers followed by "R"',
    },
    {
      regex: /^[0-9]{9}[A-Z]{1}$/i,
      description: 'License must be 9 numbers followed by 1 letter',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
    {
      regex: /^[0-9]{3}[A-Z]{1}[0-9]{6}$/i,
      description: 'License must be 3 numbers + 1 alfanumeric + 6 numbers',
    },
    {
      regex: /^[A-Z]\d{5,6}[A-Z]$/i,
      description: 'ANNNNNA MinLength = 7 MaxLength = 7 OR ANNNNNA MinLength = 8 MaxLength = 8'
    },
  ],
  MT: [
    {
      regex: /^[0-9]{13}$/i,
      description: 'License must be 13 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
    {
      regex: /^[A-Z]\d(\d|[A-Z])\d{2}[A-Z]{3}\d$/i,
      description: 'ANXNNAAAN MinLength = 9 MaxLength = 9'
    },
  ],
  NE: [
    {
      regex: /^[A-Z]\d{3,8}$/i,
      description: 'ANNNNNNNN MinLength = 4 MaxLength = 9'
    },
  ],
  NV: [
    {
      regex: /^[0-9]{9,10}$/i,
      description: 'License must be 9-10 numbers',
    },
    {
      regex: /^[0-9]{12}$/i,
      description: 'License must be 12 numbers',
    },
    {
      regex: /^[X]{1}[0-9]{8}$/i,
      description: 'License must be "X" followed by 8 numbers',
    },
    {
      regex: /^[A-Z]\d{8}$/i,
      description: 'ANNNNNNNN MinLength = 9 MaxLength = 9'
    },
  ],
  NH: [
    {
      regex: /(^[0-9]{2}[A-Z]{3}[0-9]{5}$|^[A-Z]{3}[0-9]{8}$)/i,
      description: 'License must be 2 numbers followed by 3 letters followed by 5 numbers OR 3 letters followed by 8 numbers'
    },
  ],
  NJ: [
    {
      regex: /^[A-Z]{1}[0-9]{14}$/i,
      description: 'License must be 1 letter followed by 14 numbers',
    },
  ],
  NM: [
    {
      regex: /^[0-9]{8,9}$/i,
      description: 'License must be 8-9 numbers',
    },
  ],
  NY: [
    {
      regex: /^[A-Z]{1}[0-9]{7}$/i,
      description: 'License must be 1 letter followed by 7 numbers',
    },
    {
      regex: /^[0-9]{8,9}$/i,
      description: 'License must be 8-9 numbers',
    },
  ],
  NC: [
    {
      regex: /^[0-9]{1,12}$/i,
      description: 'License must be 1-12 numbers',
    },
  ],
  ND: [
    {
      regex: /^[A-Z]{3}[0-9]{6}$/i,
      description: 'License must be 3 letters followed by 6 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  OH: [
    {
      regex: /^[A-Z]{2}[0-9]{6}$/i,
      description: 'License must be 2 letters followed by 6 numbers',
    },
  ],
  OK: [
    {
      regex: /^[A-Z]{1}[0-9]{9}$/i,
      description: 'License must be 1 letter followed by 9 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
    {
      regex: /^\d{7,9}$/,
      description: 'NNNNNNNNN MinLength = 7 MaxLength = 9'
    },
  ],
  OR: [
    {
      regex: /^[0-9]{5,9}$/i,
      description: 'License must be 5-9 numbers',
    },
    {
      regex: /^[A-Z]\d{7}$/i,
      description: 'ANNNNNNN MinLength = 8 MaxLength = 8'
    },
    {
      regex: /^[A-Z0-9]{6,9}$/i,
      description: 'XXXXXXXXX MinLength = 6 MaxLength = 9'
    },
  ],
  PA: [
    {
      regex: /^[0-9]{8}$/i,
      description: 'License must be 8 numbers',
    }
  ],
  RI: [
    {
      regex: /^[0-9]{7,8}$/i,
      description: 'License must be 7 or 8 numbers without letters',
    },
    {
      regex: /^[A-Z]{1}[0-9]{6}$/i,
      description: 'License must be 1 letter followed by 6 numbers',
    },
  ],
  SC: [
    {
      regex: /^[0-9]{5,11}$/i,
      description: 'License must be 5-11 numbers',
    }
  ],
  SD: [
    {
      regex: /^[0-9]{6,9}$/i,
      description: 'License must be 6-9 numbers',
    },
  ],
  TN: [
    {
      regex: /^[0-9]{7,9}$/i,
      description: 'License must be 7-9 numbers',
    },
  ],
  TX: [
    {
      regex: /^\d{5,8}$/,
      description: 'NNNNNNNN MinLength = 5 MaxLength = 8'
    },
  ],
  UT: [
    {
      regex: /^[0-9]{4,10}$/i,
      description: 'License must be 4-10 numbers'
    }
  ],
  VT: [
    {
      regex: /^[0-9]{8}$/i,
      description: 'License must be 8 numbers',
    },
    {
      regex: /^[0-9]{7}[A]$/i,
      description: 'License must be 7 numbers followed by "A"',
    },
    {
      regex: /^\d{7}[A-Z]?$/i,
      description: 'NNNNNNNA MinLength = 8 MaxLength = 8 OR NNNNNNN MinLength = 7 MaxLength = 7'
    },
  ],
  VA: [
    {
      regex: /^[A-Z]{1}[0-9]{8}$/i,
      description: 'License must be 1 letter followed by 8 numbers',
    },
    {
      regex: /^[0-9]{9}$/,
      description: 'License must be 9 numbers',
    },
  ],
  VI: [
    {
      regex: /^\d{10}$/,
      description: 'NNNNNNNNNN MinLength = 10 MaxLength = 10',
    },
  ],
  WA: [
    {
      regex: /^(?=.{12}$)[A-Z]{1,7}[A-Z0-9\\*]{4,11}$/i,
      description: 'License must be 1-7 letters followed by any combination of letters, numbers, or "*" for a total of 12 characters',
    },
    {
      regex: /^[A-Z0-9]{12}$/i,
      description: 'XXXXXXXXXXXX MinLength = 12 MaxLength = 12'
    },
  ],
  WV: [
    {
      regex: /^[0-9]{7}$/i,
      description: 'License must be 7 numbers',
    },
    {
      regex: /^[A-Z]{2}[0-9]{5}$/i,
      description: 'License must be 2 letters followed by 5 numbers',
    },
    {
      regex: /^[A-Z]{1,2}[0-9]{6}$/i,
      description: 'License must be 1-2 letters followed by 6 numbers',
    },
    {
      regex: /^[A-Z]\d{6}$/i,
      description: 'ANNNNNN MinLength = 7 MaxLength = 7'
    },
    {
      regex: /^[A-Z]{2}\d{5,6}$/i,
      description: 'AANNNNN MinLength = 7 MaxLength = 7 OR AANNNNNN MinLength = 8 MaxLength = 8'
    },
    {
      regex: /^\d[A-Z]\d{5}$/i,
      description: 'NANNNNN MinLength = 7 MaxLength = 7'
    },
  ],
  WI: [
    {
      regex: /^[A-Z]{1}[0-9]{13}$/i,
      description: 'License must be 1 letter followed by 13 numbers',
    },
  ],
  WY: [
    {
      regex: /^[0-9]{9}$/,
      description: 'License must be 9 numbers',
    },
  ],
  PR: [
    {
      regex: /^\d{7,9}$/,
      description: 'NNNNNNNNN MinLength = 7 MaxLength = 9'
    }
  ]
};

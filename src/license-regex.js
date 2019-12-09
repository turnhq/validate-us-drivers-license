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
      regex: /^[0-9]{1,8}$/i,
      description: 'License must be 1-8 numbers',
    },
  ],
  AK: [
    {
      regex: /^[0-9]{1,7}$/i,
      description: 'License must be 1-7 numbers',
    },
  ],
  AZ: [
    {
      regex: /^[A-Z]{1}[0-9]{1,8}$/i,
      description: 'License must be 1 letter followed by 1-8 numbers',
    },
    {
      regex: /^[A-Z]{2}[0-9]{2,5}$/i,
      description: 'License must be 2 letters followed by 2-5 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  AR: [
    {
      regex: /^[0-9]{4,9}$/i,
      description: 'License must be 4-9 numbers',
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
    {
      regex: /^[A-Z]{1}[0-9]{3,6}$/i,
      description: 'License must be 1 letter followed by 3-6 numbers',
    },
    {
      regex: /^[A-Z]{2}[0-9]{2,5}$/i,
      description: 'License must be 2 letters followed by 2-5 numbers',
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
      regex: /^[0-9]{1,7}$/i,
      description: 'License must be 1-7 numbers',
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
  ],
  GA: [
    {
      regex: /^[0-9]{7,9}$/i,
      description: 'License must be 7-9 numbers',
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
      regex: /^[A-Z]{1}[0-9]{11,12}$/i,
      description: 'License must be 1 letter followed by 11-12 numbers',
    }
  ],
  IN: [
    {
      regex: /^[A-Z]{1}[0-9]{9}$/i,
      description: 'License must be 1 letter followed by 9 numbers',
    },
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
      regex: /^([A-Z]{1}[0-9]{1}){2}[A-Z]{1}$/i,
      description: 'License must be 1 letter then 1 number then 1 letter then 1 number then 1 letter',
    },
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
      regex: /^[A-Z]{1}[0-9]{8}$/i,
      description: 'License must be 1 letter followed by 8 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  MI: [
    {
      regex: /^[A-Z]{1}[0-9]{10}$/i,
      description: 'License must be 1 letter followed by 10 numbers',
    },
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
      regex: /^[0-9]{8}[A-Z]{2}$/i,
      description: 'License must be 8 numbers followed by 2 letters',
    },
    {
      regex: /^[0-9]{9}[A-Z]{1}$/i,
      description: 'License must be 9 numbers followed by 1 letter',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  MT: [
    {
      regex: /^[A-Z]{1}[0-9]{8}$/i,
      description: 'License must be 1 letter followed by 8 numbers',
    },
    {
      regex: /^[0-9]{13}$/i,
      description: 'License must be 13 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
    {
      regex: /^[0-9]{14}$/i,
      description: 'License must be 14 numbers',
    },
  ],
  NE: [
    {
      regex: /^[A-Z]{1}[0-9]{6,8}$/i,
      description: 'License must be 1 letter followed by 6-8 numbers',
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
  ],
  NH: [
    {
      regex: /^[0-9]{2}[A-Z]{3}[0-9]{5}$/i,
      description: 'License must be 2 numbers followed by 3 letters followed by 5 numbers'
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
      regex: /^[A-Z]{1}[0-9]{18}$/i,
      description: 'License must be 1 letter followed by 18 numbers',
    },
    {
      regex: /^[0-9]{8,9}$/i,
      description: 'License must be 8-9 numbers',
    },
    {
      regex: /^[0-9]{16}$/i,
      description: 'License must be 16 numbers',
    },
    {
      regex: /^[A-Z]{8}$/i,
      description: 'License must be 8 letters',
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
      regex: /^[A-Z]{1}[0-9]{4,8}$/i,
      description: 'License must be 1 letter followed by 4-8 numbers',
    },
    {
      regex: /^[A-Z]{2}[0-9]{3,7}$/i,
      description: 'License must be 2 letters followed by 3-7 numbers',
    },
    {
      regex: /^[0-9]{8}$/i,
      description: 'License must be 8 numbers',
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
  ],
  OR: [
    {
      regex: /^[0-9]{1,9}$/i,
      description: 'License must be 1-9 numbers',
    },
    {
      regex: /^[a-zA-Z0-9]{7}$/i,
      description: 'License must be 7 alphanumeric characters',
    }
  ],
  PA: [
    {
      regex: /^[0-9]{8}$/i,
      description: 'License must be 8 numbers',
    }
  ],
  RI: [
    {
      regex: /^[0-9]{7}$/i,
      description: 'License must be 7 numbers',
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
      regex: /^[0-9]{6,10}$/i,
      description: 'License must be 6-10 numbers',
    },
    {
      regex: /^[0-9]{12}$/i,
      description: 'License must be 12 numbers',
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
      regex: /^[0-9]{7,8}$/i,
      description: 'License must be 7-8 numbers',
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
  ],
  VA: [
    {
      regex: /^[A-Z]{1}[0-9]{8,11}$/i,
      description: 'License must be 1 letter followed by 9-11 numbers',
    },
    {
      regex: /^[0-9]{9}$/i,
      description: 'License must be 9 numbers',
    },
  ],
  WA: [
    {
      regex: /^(?=.{12}$)[A-Z]{1,7}[A-Z0-9\\*]{4,11}$/i,
      description: 'License must be 1-7 letters followed by any combination of letters, numbers, or "*" for a total of 12 characters',
    }
  ],
  WV: [
    {
      regex: /^[0-9]{7}$/i,
      description: 'License must be 7 numbers',
    },
    {
      regex: /^[A-Z]{1,2}[0-9]{5,6}$/i,
      description: 'License must be 1-2 letters followed by 5-6 numbers',
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
      regex: /^[0-9]{9,10}$/i,
      description: 'License must be 9-10 numbers',
    },
  ],
  PR: [
    {
      regex: /^([a-zA-Z0-9_-]){5,}$/,
      description: 'License must be more than 5 characters'
    }
  ]
};

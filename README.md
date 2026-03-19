# validate-us-drivers-license

Validate US driver's license numbers against all 50 state formats.

- **Node.js:** Supports Node **10** and above (`engines.node: ">=10.0.0"`).
- **Format:** CommonJS only; no build step required.

## Install

```bash
npm install validate-us-drivers-license
```

## Usage

```js
const {
  isValidUSLicense,
  validateUSDriversLicense,
  supportedStates,
  driversLicenseRegex
} = require('validate-us-drivers-license');
```

### `isValidUSLicense(license, state)`

Returns `true` or `false`.

- **`license`** (string): License number to check (spaces and hyphens are stripped).
- **`state`** (string): Two-letter US state code (e.g. `'CA'`, `'TX'`).

```js
isValidUSLicense('1234567', 'AL');   // true
isValidUSLicense('12345678', 'AL');  // false
isValidUSLicense('1234567', 'ZZ');   // false (invalid state)
```

### `validateUSDriversLicense(license, state)`

Returns an object `{ valid: boolean, reasons: string[] }`. Same inputs as above.

```js
validateUSDriversLicense('1234567', 'AL');
// { valid: true, reasons: [] }

validateUSDriversLicense('12345678', 'AL');
// { valid: false, reasons: ['License must be 1-7 numbers', ...] }

validateUSDriversLicense('abc', 'NY');
// { valid: false, reasons: ['License and State must be Strings'] or state/format messages }
```

### `supportedStates`

Array of two-letter state codes.

```js
supportedStates.includes('IL'); // true
```

### `driversLicenseRegex`

Object keyed by state code; each value is an array of `{ regex, description }` used for validation. For advanced or custom use only.

## License

MIT

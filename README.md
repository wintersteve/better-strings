# better-strings

A lightweight string util to make working with dynamic and therefore possibly empty data a breeze.

## Usage

Tired of seeing this?
```javascript
const text = `Hello ${data?.possibleUndefinedValue}!`;
// Hello undefined!
console.log(text)
  
// We have to check the value first for truthiness
const checkedText = data?.possibleUndefinedValue ? `Hello ${data?.possibleUndefinedValue}!` : '';
// ''
console.log(checkedText)
```

Do this instead!
```javascript
import { f } from 'better-template-strings';

// Empty string by default
const text = f`Hello ${data?.possibleUndefinedValue}!`;
// ''
console.log(text)

// With injected fallback value
const text = f('Some Error Occured')`Hello ${data?.possibleUndefinedValue}!`;
// 'Some Error Occured'
console.log(text)
```
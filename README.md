# better-template-strings

A lightweight string util to make working with dynamic and therefore possibly empty data a breeze.

## Usage

### Tired of seeing undefined in unguarded strings?

```javascript
// Hello undefined!
`Hello ${data?.possibleUndefinedValue}!`;
// We have to handle this for every injected argument
data?.possibleUndefinedValue ? `Hello ${data?.possibleUndefinedValue}!` : '';
```
### The solution!
```javascript
import { f } from 'better-template-strings';

// Returns an empty string by default if any value is undefined
f`Hello ${data?.possibleUndefinedValue}!`;

// Or an injected fallback value
f('Some Error Occured')`Hello ${data?.possibleUndefinedValue}!`;
```
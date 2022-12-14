# better-template-strings

A lightweight template string util to make working with dynamic and nullish data a breeze.

## Usage

### Tired of seeing undefined in unguarded strings?

```javascript
// Hello undefined!
`Hello ${data?.maybeNullish}!`;
// We have to guard for every argument
data?.maybeNullish ? `Hello ${data?.maybeNullish}!` : '';
```
### The simple solution
```javascript
import { f } from 'better-template-strings';

// Returns "" if any argument is nullish
f`Hello ${data?.maybeNullish}!`;

// Returns "Some Error Occured"
f('Some Error Occured')`Hello ${data?.maybeNullish}!`;
```
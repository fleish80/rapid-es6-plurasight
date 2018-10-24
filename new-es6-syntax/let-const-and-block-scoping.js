
// What happens in the following?
'use strict'
console.log(productId); // undefined
var productId = 12;
// console.log(productId) is undefined because the variable productId gets hoisted.

// If instead we use let:
'use strict'
console.log(productId); // ReferenceError: productId is not defined
let productId = 12;
// We get a ReferenceError because productId is no longer being hoisted.
// Note: When I tried this in a React / Babel environment, both cases console logged undefined.

// The let keyword also applies block level scoping:
'use strict'
let productId = 12;
{
  let productId = 2000;
}
console.log(productId); // 12

'use strict'
{
  let productId = 200;
}
console.log(productId); // ReferenceError: productId is not defined

'use strict'
function updateProductId() {
  productId = 12
}
let productId = null;
updateProductId();
console.log(productId); // 12
// Even though the function updateProductId is being defined before the variable productId, it is being declared after productId.

'use strict'
let productId = 42;
for (let productId = 0; productId < 10; ++productId) {}
console.log(productId); // 42
// The above works because let productId = 0; is scoped to the for loop.

'use strict'
let updateFunctions = [];
for (let i = 0; i < 2; ++i) {
  updateFunctions.push(function() { return i; });
}
console.log(updateFunctions[0]()); // 0

// const
// When you declare a variable using const, you must initialize it.
'use strict'
const MARKUP_PCT;
console.log(MARKUP_PCT); // Syntax Error: Unexpected token ;
// Obviously you can't change a const once it's set.

'use strict'
const MARKUP_PCT = 100;
MARKUP_PCT = 10; // Syntax Error: "MARKUP_PCT" is read-only
// const still respects block level scoping, so the following is allowed:

'use strict'
const MARKUP_PCT = 100;
if (MARKUP_PCT > 0) {
  const MARKUP_PCT = 10; // Declared in its own inner scope
}
console.log(MARKUP_PCT); // 100
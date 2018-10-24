'use strict'
console.log(productA); //undefined
var productA = 12;

'use strict'
console.log(productB); //ReferenceError: proudctB is not defined
let productB = 12;

'use strict'
let productC = 12;
console.log(productC); //12

'use strict'
let productD;
console.log(productD); //undefined

'use strict'
let productE = 12;
{
    let productE = 1000;
}
console.log(productE); //12

'use strict'
{
    let productF = 1000;
}
console.log(productF); ////ReferenceError: proudctB is not defined

'use strict'
function updateProductId() {
    productG = 12
  }
  
  let productG = null;
  updateProductId();
  console.log(productG); // 12

'use strict'
let productH = 42;
for (let productH = 0; productH < 10; ++productH) {}
console.log(productH); // 42

'use strict'
let updateFunctions = [];
for (var i = 0; i < 2; ++i) {
  updateFunctions.push(function() { return i; });
}
console.log(updateFunctions[0]()); // 2

'use strict'
let updateFunctions = [];
for (let i = 0; i < 2; ++i) {
  updateFunctions.push(function() { return i; });
}
console.log(updateFunctions[0]()); // 0

'use strict'
const MARKUP_PCTA;
console.log(MARKUP_PCTA); // Syntax Error: Unexpected token ;

'use strict'
const MARKUP_PCT = 100;
MARKUP_PCT = 10; // Syntax Error: "MARKUP_PCT" is read-only

'use strict'
const MARKUP_PCTB = 100;
if (MARKUP_PCTB > 0) {
  const MARKUP_PCT = 10; // Declared in its own inner scope
}
console.log(MARKUP_PCTB); // 100


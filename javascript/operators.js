
let x = 0 == '';
console.log(x); // true

x = 0 == '0';
console.log(x); // true

x = 0 === '0';
console.log(x); // false

x = 10 == new Number(10);
console.log(x); // true

x = false == undefined;
console.log(x); // false

x = false == null;
console.log(x); // false

x = null == undefined;
console.log(x); // true

x = 1 == true;
console.log(x); // true

x = 1 === true;
console.log(x); // false

x = 0 == false;
console.log(x); // true

x = 0 === false;
console.log(x); // false

x = 0 == '\n';
console.log(x); // true

console.log('-----------------')

x = {};
let y = {};
console.log(x == y); // false
console.log(x === y); // false

let z = x;
console.log(x == z); // true
console.log(x === z); // true

console.log('-----------------')

let defaultValue = 2;

x = 0 || defaultValue;
console.log(x); // 2

x = false || defaultValue;
console.log(x); // 2

x = null || defaultValue;
console.log(x); // 2

x = undefined || defaultValue;
console.log(x); // 2

x = '' || defaultValue;
console.log(x); // 2

x = 10 || defaultValue;
console.log(x); // 10

x = true || defaultValue;
console.log(x); // true

x = 0 && 2;
console.log(x); // 0

console.log('-----------------')

x = !!0;
console.log(x); // false

x = !!NaN;
console.log(x); // false

x = !!'';
console.log(x); // false

x = !!false;
console.log(x); // false

x = !!null;
console.log(x); // false

x = !!undefined;
console.log(x); // false

x = !!10;
console.log(x); // true

x = !!{};
console.log(x); // true

x = !![];
console.log(x); // true


x = null;
y = x !== '' && x !== undefined && x !== null && x !== 0;
console.log(y); // false
// The expression below is the same as:
y = !!x;
console.log(y); // false
// But be careful with the number Zero when you need to consider it as TRUE in a expression:
if (!!0)
    console.log(y); // Will never executed.
else
    console.log(y); // false.


console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')    

/*

Exists only a numeric type on javascrip and it have the following characteristics:

    # IEEE-754 (Starndard for Floating-Point;
    # binary64 or Double precision;
    # Be careful with exceptions;    

*/ 

// Be careful with:
const x = 0.1 + 0.2;
console.log(x);
// Result = 0.30000000000000004

console.log(3 / 0);
// Result = Infinity

console.log("teste" * 1);
// Result = NaN (not a number)


// # Math API:
const y = 10;
Math.abs(y);
Math.floor(y);
Math.log(y);
Math.min(y);
Math.max(y);
Math.pow(y);
Math.random(y);
Math.round(y);
Math.sin(y);
Math.sqrt(y);
Math.tan(y);

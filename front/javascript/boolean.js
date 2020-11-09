
const x = true;


console.log(x == x.toString()); //false
console.log(x === x.toString()); //false
console.log(x == 'true'); //false
console.log(x === 'true'); //false
console.log(x == x.valueOf()); //true

// Be careful with:
console.log(!!0); //false
console.log(!!NaN); //false
console.log(!!''); //false
console.log(!!false); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!{}); //true
console.log(!!10); //true
console.log(!!-10); //true
console.log(!![]); //true

const y = 10;
if (y) {
    console.log('ok')
}



/*
    # Functions on javascript are first class tha's means that it can be attributed to a variable, 
    passed as a parameter and returned from another function;

*/


// # Creating functions:

// Function declaration:
// Obs: It's important to know that these type of functions can be declared in any place of the file. 
// It means that these functions are loaded before the interpretation of the code. So the function "func1" can
// be called before its declaretion;
//EX:
console.log(func1(10, 5));
function func1(a, b) {
    return a + b;
}

// Function Named expression:
//console.log(x(10, 5)); //An error will occur.
var x = function func2(a, b) {
    return a + b;
}
console.log(x);

// Function expression:
//console.log(y(10, 5)); //An error will occur.
var y = function (a, b) {
    return a + b;
}
console.log(y);
console.log(x(1, 2));

//-------------------------------------------------------------------------
console.log('# Lambda');
let f1 = (price) =>  { return price * 0.2 };
console.log(f1(1000));

f1 = (price) =>  { 
    let x = price * 0.2 
    return x;
};
console.log(f1(1000));

f1 = (price) =>  price * 0.2;
console.log(f1(1000));

f1 = () => 1;
console.log(f1());

//-------------------------------------------------------------------------

console.log('# Passing a function to another function:');
f1 = (price) =>  price * 0.2;
f2 = (val, func) => { return val + func(val) }
console.log(f2(1000, f1));
console.log('----------');

//-------------------------------------------------------------------------
console.log('# Returning a function inside a function:');
f1 = function () {
    msg = 'I am a function';
    return function() { return msg }
}
console.log(f1);
console.log(f1());
console.log(f1()());

//-------------------------------------------------------------------------

console.log('# Calling a function inside an object:');
let person = {
    name : 'Hugo',
    age: 31,
    getAge: function() {
        return this.age;
    } 
}
console.log(person.getAge());

let getAge = function() { return this.age; } 
person = {
    name : 'Hugo',
    age: 31,
    getAge: getAge
}

console.log(getAge()); // Will return undefined becouse of the this.
console.log(person.getAge()); // 31

//-------------------------------------------------------------------------
console.log('# Calling a with call and apply:');
f1 = () => 'I am a lambda function.'
console.log(f1.call());

f2 = function(p1, p2) { 
    return this.age + p1 + p2; 
} 
person = {
    name : 'Hugo',
    age: 31
}    
console.log(f2.call(person, 10, 11));
console.log(f2.apply(person, [10, 11]));

//-------------------------------------------------------------------------
console.log('# Constructor functions VS Factory functions:');
console.log('# Constructor functions:');
var createPerson = function(name, age) {
    return {
        name : name,
        age, age
    }
}
console.log(createPerson('Hugo', 31));

console.log('# Factory functions');
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}
console.log(new Person('Hugo', 31));
let hugo = {};
Person.call(hugo, 'Hugo', 31);
console.log(hugo);
//-------------------------------------------------------------------------

console.log('# Using a object to encapsulating a property:');
var counter = {
    x: 0,
    add: function() {
        return ++this.x;
    }
}
counter.add();
counter.add();
console.log(counter.x);// 2
counter.x = undefined;
counter.add();
console.log(counter.x);// NaN

console.log('# Using a function to encapsulating a property:');
console.log('------------------');

//Implementing Constructor functions:
counter = function() {
    let x = 0;
    return {
        add: function() {
            return ++x;
        }
    }
}
let createCounter = counter();
console.log(createCounter.x);// undefined
console.log(createCounter.add());// 1
console.log(createCounter.add());// 2
console.log('------------------');

//Implementing Factory functions:
Counter = function() {
    var x = 0;
    this.add = function() {
        return ++x;
    }
}
createCounter = new Counter();
console.log(createCounter.x);// undefined
console.log(createCounter.add());// 1
console.log(createCounter.add());// 2
console.log('------------------');

// With private property:
Counter = function() {
    let _x = 0;
    let _add = function() {
        return ++_x;
    };
    let _reset = function() {
        _x = 0;
    };
    return {
        add: _add,
        reset: _reset
    }
}
createCounter = new Counter();
console.log(createCounter.add());// 1
console.log(createCounter.add());// 2
console.log(createCounter.reset());
console.log(createCounter.add());// 1
console.log(createCounter.add());// 2
console.log('------------------');

//-------------------------------------------------------------------------
console.log('# (IIEF) Immediately-Invoked function expression:');
// Module pattern:
createCounter = (function() {
    let x = 0;
    return {
        add: function() {
            return ++x;
        }
    }
})();  
console.log(createCounter.x);// undefined
console.log(createCounter.add());// 1
console.log(createCounter.add());// 2

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
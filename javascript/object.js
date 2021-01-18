/*
    # Objects in javascript are dynamic collection of keys and values of any types of datas;
    # It's possible to add or remove properties anytime in a object;

*/

let person = {};

if (!person) {
    console.log("TESTE1");
} else if (person != null) {
    console.log("TESTE2");
} else {
    console.log("TESTE3");
}

console.log(typeof person); //object

// # Setting properties:
person = {
    name : 'hugo',
    age : 31,
    phone : null,
    address : {
        street : 'Street A',
        number: 13
    }
}

console.log(person);
person.a = 'a';
person['b'] = 'b';
person.address.a = 'a';
person['address']['b'] = 'b';
person.c = 'c';
person.c = undefined;
person['it is a test'] = 'it is a test';
console.log(person);


// # Deleting properties:
delete person.address;

console.log(person);

// # Getting properties of an object:
console.log('------------------------------');
for(const p in person) {
    console.log(p);
} 
console.log('------------------------------------------------------------------------------------------');

// # Inheritance:
// # All objects inheritance from Object.prototype;
// # The propertie __proto__ is a reference to prototype of an object
//  , but be careful because it's not supported by all browsers; 


var man = {
    gender: 'male'
};

var hugo = {
    name: 'Hugo',
    age: 31,
    __proto__: man
}

var gabriel = {
    name: 'Gabriel',
    age: 1,
    __proto__: man
}

console.log(hugo.name, hugo.age, hugo.gender);
console.log(gabriel.name, gabriel.age, gabriel.gender);
console.log('------------------------------');

Object.setPrototypeOf(hugo, man);
Object.setPrototypeOf(gabriel, man);

console.log(hugo.name, hugo.age, hugo.gender);
console.log(gabriel.name, gabriel.age, gabriel.gender);

console.log('------------------------------');


var hugo = Object.create(man);
hugo.name = 'Hugo';
hugo.age = 31;

var gabriel = Object.create(man);
gabriel.name = 'Gabriel';
gabriel.age = 1;

console.log(hugo.name, hugo.age, hugo.gender);
console.log(gabriel.name, gabriel.age, gabriel.gender);

console.log('------------------------------');

let x = Object.keys(hugo);
console.log(x); // [ 'name', 'age' ]

for (p in hugo) {
    console.log(p);
    //name
    //age
    //gender
    if (!hugo.hasOwnProperty(p))
        console.log('I do not have the property: ', p); 
}

console.log('------------------------------');


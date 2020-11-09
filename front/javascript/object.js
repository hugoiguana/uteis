/*
    # Objects in javascript are dynamic collection of keys and values of any types of datas;
    # It's possible to add or remove properties anytime in a object;

*/

let person = {};

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
console.log('---------');
for(const p in person) {
    console.log(p);
} 
console.log('---------');


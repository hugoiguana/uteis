

//# Undefined is returned when a property of an object is consulted and it doesn't exist:

let person = {};
console.log(person.name); // undefined

person.name = 'Hugo';
person.age = 31;
console.log(person.name);
console.log(person.age);

console.log('---------');
for(const p in person) {
    console.log(p);
} 
console.log('---------');

person.age = undefined;
console.log(person.age);
console.log('---------');
for(const p in person) {
    console.log(p);
} 
console.log('---------');


// # Null the absence og value:
person.age = null;
console.log(person.age);

console.log('# Creating an Array with diffenrents ways: ');

let cars = [];
cars[0] = 'celta';
cars[1] = 'Hb20';
console.log(cars);

cars = ['Celta', 'Hb20'];
console.log(cars);

cars = new Array('Celta', 'Hb20');
console.log(cars);

cars = new Array();
cars[0] = 'celta';
cars[1] = 'Hb20';
console.log(cars);

cars = new Array(2);
cars[0] = 'celta';
console.log(cars);


cars[0] = 'celta';
cars[1] = 'Hb20';

console.log('# Using some Array functions: ');
console.log(cars.toString());
console.log(cars.length);

cars.push('Gol'); // Add an element in last position
console.log(cars); //[ 'celta', 'Hb20', 'Gol' ]

cars.pop(); // remove last element.
console.log(cars);//[ 'celta', 'Hb20' ]

cars.unshift('Gol'); // add an element in first position.
console.log(cars);//[ Gol, 'Hb20' ]

cars.shift('Gol');// remove first element.
console.log(cars);//[ 'celta', 'Hb20' ]

let position = cars.indexOf('celta');
console.log(position);

console.log('-----------');
console.log(cars);
console.log(cars.splice(0, 1)); // Remove 1 element in the position 0.
console.log(cars);
console.log(cars.splice(0, 0, 'Gol')); // Add the 'Gol' element in the position 0 and remove 0 element.
console.log(cars);
console.log('-----------');

cars.forEach(x => {
    console.log(x);
});
console.log('-----------');

let carsFiltered = cars.filter(x => {
    return x === 'Gol';
});
console.log(carsFiltered);// [ 'Gol' ]
console.log('-----------');

let isAllCarsGol = cars.every(x => {
    return x === 'Gol';
});
console.log(isAllCarsGol); // false
console.log('-----------');

let isThereGolOnArray = cars.some(x => {
    return x === 'Gol';
});
console.log(isThereGolOnArray); // true
console.log('-----------');

let anotherCarArray = cars.map(x => {
    return {
        name: x,
        description: x,
        price: 10
    }
});
console.log(anotherCarArray);
console.log('-----------');

let totalPrice = anotherCarArray.reduce((prev, current) => { return prev + current.price }, 0);
console.log(totalPrice);
console.log(anotherCarArray);
totalPrice = anotherCarArray.reduce((prev, current) => prev + current.price, 0);
console.log(totalPrice);

console.log('-----------');
cars = cars.concat('Honda Civic');
console.log(cars);

console.log('-----------');
console.log(cars.slice(0, 2));
console.log(cars.slice(0));


console.log('-----------');
cars.reverse();
console.log(cars);

console.log('-----------');
cars.sort();
console.log(cars);
anotherCarArray.sort((x, y) => x.name - y.name);
console.log(anotherCarArray);

console.log('-----------');
const joinCars = cars.join(';');
console.log(joinCars); // Gol;Hb20;Honda Civic

console.log('-----------');
const array1 = new Array(20).join('a');
console.log(array1); // aaaaaaaaaaaaaaaaaaa
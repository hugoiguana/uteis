const fs = require('fs');

// #### Callback functions: ####
/*
Callback is a function that is passed to an "async function" and it will be called 
when the "async function" finalizes.
*/
console.log('--------------Callback------------------');
console.log('teste1');

 
function callback1(err, contents) {
    console.log('Error: ', err);
    console.log(String(contents));
    fs.readFile('./file2.txt', callback2);
} 

function callback2(err, contents) {
    console.log('Error: ', err);
    console.log(String(contents));
    console.log('--------------------------------');
} 

fs.readFile('./file1.txt', callback1);

console.log('teste2');
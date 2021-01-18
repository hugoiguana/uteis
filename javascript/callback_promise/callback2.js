const fs = require('fs');

// #### Callback functions: ####

console.log('--------------Callback------------------');
console.log('teste1');

 
callback1 = (err, contents) => {
    console.log('Error: ', err);
    console.log(String(contents));
    fs.readFile('./file2.txt', callback2);
} 


callback2 = (err, contents) => {
    console.log('Error: ', err);
    console.log(String(contents));
    console.log('--------------------------------');
}

fs.readFile('./file1.txt', callback1);

console.log('teste2');

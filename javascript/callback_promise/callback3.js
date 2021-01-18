const fs = require('fs');

// #### Callback functions: ####
/*
Callback is a function that is passed to an "async function" and it will be called 
when the "async function" finalizes.
*/
console.log('--------------Callback------------------');
console.log('teste1');

fs.readFile('./file1.txt', (err, contents) => {
    console.log('Error: ', err);
    console.log(String(contents));

    fs.readFile('./file2.txt', (err, contents) => {
        console.log('Error: ', err);
        console.log(String(contents));
        console.log('--------------------------------');
    }); 

}); 


console.log('teste2');
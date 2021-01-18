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


callback2 = (err, contents) => {
    console.log('Error: ', err);
    console.log(String(contents));
    console.log('--------------------------------');
}

fs.readFile('./file1.txt', callback1);
/* 
fs.readFile('./file1.txt', (err, contents) => {
    console.log('Error: ', err);
    console.log(String(contents));
}); 
*/

console.log('teste2');
//#####################################################################

// #### Promises: ####
const readFile = file => new Promise((resolve, reject) => {

    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err);
        } else {
            resolve(contents);
        }
    });
});

const promesiReadFiles = readFile('./file1.txt').then(contents => {
    console.log(String(contents));
    return readFile('./file2.txt');
}).then(contents => {
    console.log(String(contents));
}).finally(() => {
    console.log('Promises finalize.');    
    console.log('--------------------------------');
});

console.log('promesiReadFiles = ', promesiReadFiles);

//#####################################################################

// #### Async/Await: ####
const functionAsync1 = async() => {
    console.log('await1');
    const contents = await readFile('./file1.txt');
    console.log(contents);
    console.log('await2');
    console.log('--------------------------------');
}

console.log('teste3');
functionAsync1();
console.log('teste4');


module.exports = { readFile };
const fs = require('fs');
const readFile = require('./promise-read-files');

// #### Promises: ####

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


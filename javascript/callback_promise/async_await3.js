const readFile = require('./promise-read-files');

// #### Async/Await: ####
console.log('teste1');

async function functionAsync1() {
    console.log('await2');
    //return await readFile('./file1.txt');
    return readFile('./file1.txt');
}

async function functionAsync2() {
    console.log('await1');
    const contents = await functionAsync1();
    console.log('await3');
    console.log(String(contents));
}

console.log('teste2');
functionAsync2();
console.log('teste1');
const promise1 = Promise.resolve('pro1');
const promise2 = 'pro2';
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'pro3');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

//#################################################################

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'pro4');
    });


async function promiseAll1() {
    const promise5 = Promise.resolve('pro5');
    const promise6 = Promise.resolve('pro6');
    const [ valPromise5, valPromise6 ] = await Promise.all([promise5, promise6]);
    console.log(valPromise5, valPromise6);
}

promiseAll1();



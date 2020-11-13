
try {
    throw "My Exception";
    console.log("Will never executed");
} catch (e) {
    console.log("Exception = ", e);
}


const MyException = function (message) {
    this.message = message;
    this.name = "My Exception"
}


try {
    throw new MyException('It is not ok!');
} catch (e) {
    console.log("Exception = ", e.name, e.message);
}
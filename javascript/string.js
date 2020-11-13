/*
  # String is immutable;


*/

let x = "teste";


x = x.charAt(2);
console.log(x);

x = x.charCodeAt(2);
console.log(x);

x = "teste";
x = x.concat(" ok");
console.log(x);

x = x.indexOf('e');
console.log(x);

x = "teste";
x = x.lastIndexOf('e');
console.log(x);

x = "teste";
x = x.replace('e' , 'o');
console.log(x);

x = x.split('e');
console.log(x);

x = "teste";
x = x.substring('e');
console.log(x);

x = "teste";
x = x.search('e');
console.log(x);

x = "teste";
x = x.toLowerCase('e');
console.log(x);

x = x.toUpperCase('e');
console.log(x);

x = x.trim('e');
console.log(x);

x = x.valueOf('e');
console.log(x);
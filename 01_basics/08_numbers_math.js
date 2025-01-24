let score = 772;
// console.log(score);

let amount = new Number(7000000000000);
// console.log(amount)

// console.log(amount.toString().length)

// console.log(amount.toFixed(2))

// console.log(amount.toPrecision(4))

// console.log(amount.toLocaleString('en-IN'))

const otherNumbers = 1234.89
// console.log(otherNumbers.toPrecision(4))


let num = 10.89;
// console.log(num.toPrecision(3));

// ----------------------------Mathematics calculation-------------

// console.log(Math);

// console.log(Math.round(23.6));

// console.log(Math.round(23.4));

// console.log(Math.max(1,2,3,4,9));

// console.log(Math.min(98.3,4,1));

// console.log(Math.ceil(2.3));
// console.log(Math.floor(2.3));

// Let's talk about random value
console.log("----------------------Lets talk about random operations ------------------------------")
console.log(Math.random())
console.log(Math.floor(Math.random() * 10) + 1)

// In range between 10 - 20
let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
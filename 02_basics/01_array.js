const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray);
// console.log(myArray[3])

myArray.push("Mahesh");
console.log(myArray);
myArray.push("Pote");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.pop();
console.log(myArray);
console.log("------------------------");
console.log(myArray);

console.log("-------Shift and unshift--------");

console.log(myArray);
myArray.unshift("Hello");
console.log(myArray);
myArray.shift();
console.log(myArray);

console.log("----------search functions---");
console.log(myArray.includes(2));
console.log(myArray.includes(23));

console.log(myArray.indexOf(2));
console.log(myArray.lastIndexOf(3));

// console.log(myArray);

let numbers = [1, 2, 3, 4, 5, 3, 6, 3, 7];
let index = numbers.lastIndexOf(3);
console.log(numbers.indexOf(3));

// console.log(index);
/*
In this example, lastIndexOf(3) returns 7, which is the index of the last occurrence of the value 3 in the array numbers
*/

const newArray = myArray.join();
// console.log(myArray);
// console.log(typeof newArray);

console.log("-------------slice & splice-----------------");

// console.log(myArray)

// console.log(myArray.slice(1,3))

console.log("------------splice--------------")
console.log(myArray)
console.log(myArray.splice(2,2, "Mahesh", "pote"))

console.log(myArray)

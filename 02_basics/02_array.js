const fruits = ["Apple", "banana", "chikoo"];

const vegetables = ["palak", "tomato", "botato"];

// fruits.push(vegetables);
// console.log(fruits);

let newFruits = fruits.concat(vegetables); // concat return new array
// console.log(newFruits)

console.log("----------use spred operator------------------");

console.log([...fruits, ...vegetables]);

console.log("---isArray-----------");

let newAr1 = Array.isArray("mahesh")
console.log(newAr1)

console.log(Array.from("MAHESH"));

let score1 = 500;
let score2 = 600;
let score3 = 700;

console.log(Array.of(score1, score2, score3));

// console.log(Array.form({userName : "Mahesh"}));

let obj = {
    userName: "Pandurang"
}

let value = obj.userName;

console.log(value)
console.log(value.split(''))
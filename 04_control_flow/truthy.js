let userEmail = []; //"" //"mpote97@gmail.com";

if (userEmail) {
  console.log("Email is exist");
} else {
  console.log("email not found");
}

if (userEmail.length === 0) {
  console.log("Email array is empty");
} else {
  console.log("email not found");
}

// falsy value are : false, 0, -0, bigInt -0n, null, undefined, NaN

// how to check Object

let obj = {name : "Mahesh"};

if(Object.keys(obj).length === 0){
    console.log("Object is an empty.")
} else {
    console.log(`Object having a value : ${obj.name}`)
}

// Nullish coalescing operator ?? : null undefined

let a = null
let b = 10

val1 = a ?? b;
val1 = undefined ?? 90;
val1 = null ?? 12;
val1 = null ?? 10 ?? 20;
console.log(val1)

// Ternary operator

let score = 890;
let result = score < 70 ? "Score is less then 70" : "score is greater than 70";
console.log(result)

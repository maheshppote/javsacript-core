// Global scope
var num1 = 300;
let num2 = 400;
if (true) {
  // block scope
  var num1 = 10;
  let num2 = 20;
  const num3 = 30;
  console.log("INNER:", num2);
}

function getData(){
  var num1 = "Mahesh";
}
console.log(num1);
console.log(num2);
// console.log(num3)

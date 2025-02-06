const accountID = 'UA-XXXXX-Y';
let accountName = 'My Account';
accountName = 'My New Account';
let accountHolderState; // THIS IS NOT A GOOD PRACTICE

console.table([accountID, accountName, accountHolderState]); // [ 'UA-XXXXX-Y', 'My New Account', undefined ]

var accountCity = 'New York';
let accounyAddress = '123 Main St';
function getAccountHolderCity() {
    // Path: getAccountHolderCity
    let accountCity = 'San Francisco';
  return [accountCity, accounyAddress];
}

console.log(getAccountHolderCity()); // New York

// what is the difference between var and let?
// var is function scoped, let is block scoped
// var is hoisted, let is not but it is TDZ temporary dead zone
// var can be redeclared, let cannot
// var can be reassigned, let can be reassigned
// var is global, let is not

// provide an example of above differences
// hoisting
console.log(a); // undefined. why? because var a is hoisted; means it is declared at the top of the scope but not initialized yet 
var a = 1;
console.log(a); // 1 

console.log(fullName); // error. why? because let fullName is not hoisted; means it is not declared at the top of the scope 
let fullName = 'Mahesh pote'

// redeclaration
var b = 2;
var b = 3; // no error
let c = 4;
//let c = 5; // error

// reassignment
var d = 6;
d = 7; // no error

let e = 8;
e = 9; // no error. 

// global
var f = 10;
let g = 11;
console.log(window.f); // 10
console.log(window.g); // undefined

// what is the difference between let and const?
// let can be reassigned, const cannot
// let is block scoped, const is block scoped
// let is hoisted, const is not
// let can be declared without being initialized, const cannot

// provide an example of above differences
let h;
h = 12;
console.log(h); // 12

// const i; // error    
// i = 13; // error

// what is the difference between == and ===?

// == is loose equality, === is strict equality
// == will perform type coercion, === will not. coercion MEANS converting one type to another
// == will compare values, === will compare values and types

// provide an example of above differences

console.log(1 == '1'); // true

console.log(1 === '1'); // false

// what is the difference between null and undefined?

// null is an object, undefined is a type
// null is assigned, undefined is not assigned
// null is a value, undefined is a type
// null is a falsy value, undefined is a falsy value

// provide an example of above differences
let j;
console.log(j); // undefined

let k = null;
console.log(k); // null

// what is the difference between a function declaration and a function expression?

// function declaration is hoisted, function expression is not
// function declaration is a statement, function expression is an expression
// function declaration is global, function expression is not
// function declaration can be called before it is declared, function expression cannot

// provide an example of above differences
console.log(hello()); // Hello
function hello() {
    return 'Hello';
}

// console.log(hi()); // error
let hi = function() {
    return 'Hi';
}



 


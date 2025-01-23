// explain all about primitive and non-primitive data types with its examples in JavaScript.

// let's discuss about data types in JavaScript step by step i simple terms.

// 1. Primitive Data Types
// Primitive data types are the most basic data types in JavaScript.
// They are immutable (cannot be changed) and copied by value.
// There are 6 primitive data types in JavaScript:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (added in ES6)
// 7. BigInt (added in ES11)

// 1. Number
// Number data type is used to represent numeric values.
let num = 10;
console.log(num); // 10

// 2. String
// String data type is used to represent textual data.
let str = "Hello";
console.log(str); // Hello

// 3. Boolean
// Boolean data type is used to represent true or false.
let bool = true;
console.log(bool); // true

// 4. Undefined
// Undefined data type is used to represent undefined value.
let x;
console.log(x); // undefined

// 5. Null
// Null data type is used to represent null value.
let y = null;
console.log(y); // null

// 6. Symbol
// Symbol data type is used to represent unique values.
let sym = Symbol("id");
console.log(sym); // Symbol(id)

// 7. BigInt
// BigInt data type is used to represent large integers.
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n

// 2. Non-Primitive Data Types
// Non-primitive data types are more complex data types in JavaScript.
// They are mutable (can be changed) and copied by reference.
// There are 3 non-primitive data types in JavaScript:
// 1. Object
// 2. Array
// 3. Function

// 1. Object
// Object data type is used to represent complex data structures.
let obj = { name: "John", age: 30 };
console.log(obj); // { name: 'John', age: 30 }

// 2. Array
// Array data type is used to represent a list of elements.
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

// 3. Function
// Function data type is used to represent reusable code blocks.
let greet = function () {
  console.log("Hello, World!");
};

greet(); // Hello, World!

// That's it for now. We will discuss more about data types in upcoming examples.

// how to verify the data type of a value in JavaScript.

// let's discuss how to verify the data type of a value in JavaScript.

// 1. typeof Operator
// The typeof operator is used to check the data type of a value.
// It returns a string representing the data type of the value.
// The syntax of the typeof operator is as follows:
// typeof value
// The following are the possible return values of the typeof operator:
// "undefined" - if the value is undefined.
// "boolean" - if the value is a boolean.
// "number" - if the value is a number.
// "string" - if the value is a string.
// "symbol" - if the value is a symbol.
// "bigint" - if the value is a bigint.
// "function" - if the value is a function.
// "object" - if the value is an object or null.
// The typeof operator is useful for checking the data type of a value.

// Example 1: Using typeof Operator
let a = 10;
console.log(typeof a); // number

let b = "Hello";
console.log(typeof b); // string

let c = true;
console.log(typeof c); // boolean

let d = undefined;
console.log(typeof d); // undefined

let e = null;
console.log(typeof e); // object. why? It's a bug in JavaScript.

let f = Symbol("id");
console.log(typeof f); // symbol

let g = 1234567890123456789012345678901234567890n;
console.log(typeof g); // bigint

let h = function () {
  console.log("Hello, World!");
};
console.log(typeof h); // function. why? It's a bug in JavaScript.

let i = { name: "John", age: 30 };
console.log(typeof i); // object

let j = [1, 2, 3, 4, 5];
console.log(typeof j); // object. why? It's a bug in JavaScript.

// 2. instanceof Operator
// The instanceof operator is used to check the data type of an object.
// It returns true if the object is an instance of a specific class.
// The syntax of the instanceof operator is as follows:
// object instanceof class
// The instanceof operator is useful for checking the data type of an object.

// Example 2: Using instanceof Operator
let k = new Date();
console.log(k instanceof Date); // true

let l = new Array();
console.log(l instanceof Array); // true

let m = new Object();
console.log(m instanceof Object); // true

let n = new Function();
console.log(n instanceof Function); // true

let o = new RegExp();
console.log(o instanceof RegExp); // true

let p = new Error();
console.log(p instanceof Error); // true

// That's it for now. We will discuss more about data types in upcoming examples.

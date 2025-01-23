// lets discuss about conversion operations in JavaScript.

// 1. Implicit Conversion
// Implicit conversion is the automatic conversion of values from one data type to another data type.
// JavaScript automatically converts the data type of values when they are used in a different context.
let num1 = 10;
let num2 = "20";
let sum = num1 + num2;
console.log(sum); // 1020

// In the above example, the value of num1 is a number and the value of num2 is a string.
// When we add these two values, JavaScript automatically converts the value of num1 to a string and then concatenates the two values.

// 2. Explicit Conversion
// Explicit conversion is the manual conversion of values from one data type to another data type.
// JavaScript provides built-in functions to convert values from one data type to another data type.
// The following are the most commonly used conversion functions in JavaScript:

// 1. Number()
// The Number() function converts a value to a number.
let str = "10";
let num = Number(str);
console.log(num); // 10

// 2. String()
// The String() function converts a value to a string.
let numString = 10;
let strString = String(numString);
console.log(strString); // "10"

// 3. Boolean()
// The Boolean() function converts a value to a boolean.
let x = 10;
let bool = Boolean(x);
console.log(bool); // true

// That's it for now. We will discuss more about conversion operations in upcoming examples.

// let's practive some tricky examples to understand conversion operations in JavaScript.

// Example 1: Implicit Conversion
let num3 = 10;
let num4 = "20";
let sum1 = num3 + num4;
console.log(sum1); // 1020

// Example 2: Explicit Conversion
let str1 = "10";
let num5 = Number(str1);
console.log(num5); // 10

// Example 3: Explicit Conversion
let numString1 = 10;
let strString1 = String(numString1);
console.log(strString1); // "10"

// Example 4: Explicit Conversion
let x1 = 10;
let bool1 = Boolean(x1);

console.log(bool1); // true

// Example 5: Explicit Conversion
let y1 = 0;
let bool2 = Boolean(y1);
console.log(bool2); // false

// Example 6: Explicit Conversion

let z = "";
let bool3 = Boolean(z);
console.log(bool3); // false

// Example 7: Explicit Conversion

let a = null;
let bool4 = Boolean(a);
console.log(bool4); // false

// Example 8: Explicit Conversion

let b = undefined;
let bool5 = Boolean(b);
console.log(bool5); // false

// Example 9: Explicit Conversion

let c = NaN;
let bool6 = Boolean(c);
console.log(bool6); // false

// Example 10: Explicit Conversion

let d = Infinity;
let bool7 = Boolean(d);
console.log(bool7); // true. why? because Infinity is a truthy value.

// Example 11: Explicit Conversion

let e = -Infinity;
let bool8 = Boolean(e);
console.log(bool8); // true. why? because -Infinity is a truthy value.

// Example 12: Explicit Conversion

let f = 0;
let num6 = Number(f);
console.log(num6); // 0

// Example 13: Explicit Conversion

let g = "";
let num7 = Number(g);
console.log(num7); // 0

// Example 14: Explicit Conversion

let h = "10";
let num8 = Number(h);
console.log(num8); // 10

// Example 15: Explicit Conversion

let i = "10.5";
let num9 = Number(i);
console.log(num9); // 10.5

// Example 16: Explicit Conversion

let j = "Hello";
let num10 = Number(j);
console.log(num10); // NaN

// Example 17: Explicit Conversion

let k = "10";
let str2 = String(k);
console.log(str2); // "10"

// Example 18: Explicit Conversion

let l = 10;
let str3 = String(l);
console.log(str3); // "10"

// Example 19: Explicit Conversion

let m = true;
let str4 = String(m);
console.log(str4); // "true"

// Example 20: Explicit Conversion

let n = false;
let str5 = String(n);
console.log(str5); // "false"

// Example 21: Explicit Conversion

let o = 10;
let str6 = o.toString();
console.log(str6); // "10". why? because the toString() method converts a number to a string.

// Example 22: Explicit Conversion

let p = true;
let num11 = Number(p);
console.log(num11); // 1. why? because true is converted to 1.

// Example 23: Explicit Conversion

let q = false;
let num12 = Number(q);
console.log(num12); // 0. why? because false is converted to 0.

// Example 24: Explicit Conversion

let r = "10";
let num13 = parseInt(r);
console.log(num13); // 10. why? because parseInt() function converts a string to an integer.

// Example 25: Explicit Conversion

let s = "10.5";
let num14 = parseFloat(s);
console.log(num14); // 10.5. why? because parseFloat() function converts a string to a floating-point number.

// Example 26: Explicit Conversion

let t = 10;
let str7 = t.toString();
console.log(str7); // "10". why? because the toString() method converts a number to a string.

// Example 27: Explicit Conversion

let u = 10.5;
let str8 = u.toString();
console.log(str8); // "10.5". why? because the toString() method converts a number to a string.

// Example 28: Explicit Conversion

let v = true;
let str9 = v.toString();
console.log(str9); // "true". why? because the toString() method converts a boolean to a string.

// Example 29: Explicit Conversion

let w = false;
let str10 = w.toString();
console.log(str10); // "false". why? because the toString() method converts a boolean to a string.

// Example 30: Explicit Conversion

let x2 = 10;
let bool9 = Boolean(x2);
let str11 = x2.toString();
console.log(bool9); // true
console.log(str11); // "10"

// Example 31: Explicit Conversion

let y2 = "10";
let bool10 = Boolean(y2);
let num15 = Number(y2);
console.log(bool10); // true
console.log(num15); // 10

// Example 32: Explicit Conversion

let z2 = true;
let num16 = Number(z2);
let str12 = z2.toString();
console.log(num16); // 1
console.log(str12); // "true"







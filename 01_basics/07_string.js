// lets leran all about the string in built methods in javascript

// 1. String Length
// The length property returns the length of a string:

let str = "Hello, World!";
console.log(str.length); // 13

// 2. Finding a String in a String
// The indexOf() method returns the position of the first occurrence of a specified text in a string:

let str1 = "Hello, World!";
let pos = str1.indexOf("o");
console.log(pos); //

// The lastIndexOf() method returns the position of the last occurrence of a specified text in a string:

let str2 = "Hello, World!";
let pos2 = str2.lastIndexOf("World"); // means
console.log(pos2); // 7, why not 7? because it starts from 0

// Both indexOf() and lastIndexOf() return -1 if the text is not found:

let str3 = "Hello, World!";
let pos3 = str3.indexOf("John");
console.log(pos3); // -1, not found

// 3. Searching for a String in a String

// The search() method searches a string for a specified value and returns the position of the match:

let str4 =
  "Mahesh pote, i have a good knowledge of javascript and 10 years of experience";
let pos4 = str4.search("javascript"); //
console.log(pos4);

// The search() method cannot take a second start position argument.

// 4. Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method
// slice() extracts a part of a string and returns the extracted part in a new string.

let str5 = "Apple, Banana, Kiwi";
let res = str5.slice(7, 13); // Banana
console.log(res); // Banana
console.log(str5.slice(-12, -6)); // Banana
console.log(str4.slice(7, 13)); // pote,  ote, i h

// The substring() Method
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

let str6 = "Apple, Banana, Kiwi";
let res2 = str6.substring(7, 13); // Banana
console.log(res2); // Banana

// The substr() Method
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

let str7 = "Apple, Banana, Kiwi";
let res3 = str7.substr(7, 6); // Banana
console.log(res3); // Banana

// 5. Replacing String Content
// The replace() method replaces a specified value with another value in a string:

let str8 = "Please visit Microsoft!";
let res4 = str8.replace("Microsoft", "W3Schools");
console.log(res4); // Please visit W3Schools!

// By default, the replace() method replaces only the first match:

let str9 = "Please visit Microsoft and Microsoft!";
let res5 = str9.replace("Microsoft", "W3Schools");
console.log(res5); // Please visit W3Schools and Microsoft!

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

let str10 = "Please visit Microsoft!";

// Case sensitive
let res6 = str10.replace("microsoft", "W3Schools");
console.log(res6); //  Please visit Microsoft!

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

let str11 = "Please visit Microsoft!";
let res7 = str11.replace(/microsoft/i, "W3Schools"); // Please visit W3Schools! why not Microsoft? because of /i flag (insensitive)
console.log(res7); // Please visit W3Schools!

let str12 = "     mpote97@gmail.com ";
console.log(str12);
console.log(str12.trim());

console.time();
let str13 = new String("Nandurbar-1989");
console.log(str13);
console.log(str13.match("19"));
console.timeEnd();

console.log(typeof str13);
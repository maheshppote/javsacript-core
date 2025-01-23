// 

console.log("2" > 1); // true. WHY ? because "2" is converted to 2 and then compared with 1.
console.log("2" < "12"); // false. WHY ? because "2" is compared with "12" character by character.

console.log("02" > 1); // true. WHY ? because "02" is converted to 2 and then compared with 1.

console.log(true == 1); // true. WHY ? because true is converted to 1 and then compared with 1.
console.log(false == 0); // true. WHY ? because false is converted to 0 and then compared with 0.

console.log("0" == 0); // true. WHY ? because "0" is converted to 0 and then compared with 0.
console.log(0 == ""); // true. WHY ? because 0 is converted to "" and then compared with "".

console.log("0" == ""); // false. WHY ? because "0" is compared with "" character by character.

console.log("0" === 0); // false. WHY ? because "0" is a string and 0 is a number. They are of different data types.

console.log(null > 0); // false. WHY ? because null is converted to 0 and then compared with 0.
console.log(null == 0); // false. WHY ? because null is not equal to 0.
console.log(null >= 0); // true. WHY ? because null is converted to 0 and then compared with 0.

console.log(undefined == 0); // false. WHY ? because undefined is not equal to 0.
console.log(undefined === 0); // false. WHY ? because undefined is not equal to 0.

console.log(undefined > 0); // false. WHY ? because undefined is converted to NaN and then compared with 0.
console.log(undefined < 0); // false. WHY ? because undefined is converted to NaN and then compared with 0.
console.log(undefined >= 0); // false. WHY ? because undefined is converted to NaN and then compared with 0.

console.log(null == undefined); // true. WHY ? because both null and undefined are equal in value.


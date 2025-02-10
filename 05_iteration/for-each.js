let coding = ["js", "java", "cpp", "python", "node"];

// coding.forEach(function (x) {
//   console.log(x);
// });

// coding.forEach((x) => console.log(`By using => function - ${x}`));

// function printMe(x) {
//   console.log("printMe: ", x);
// }

// coding.forEach(printMe);

// use optional parameters:

coding.forEach((item, indexofarray, arr) => {
  // console.log(item, indexofarray, arr);
});

// Array of object

let language = [
  {
    languageName: "javascript",
    founder: "Brendan Eich",
  },
  {
    languageName: "node js",
    founder: "Ryan Dah",
  },
  {
    languageName: "Typescript",
    founder: "Anders Hejlsberg",
  },
];

language.forEach((x) => {
  console.log(`Founder of ${x.languageName} is ${x.founder}`);
});

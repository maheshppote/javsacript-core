const myObject = {
  js: "Javascript",
  java: "Java language",
  python: "Python language",
};

for (const key in myObject) {
  //   console.log(`${key} is the shortcut of ${myObject[key]}`);
}

let programming = ["js", "java", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
}

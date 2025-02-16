const student = {
  name: "Mahesh",
  age: 35,
  subject: "javascript",
};

const teacher = {
  tname: "lalit",
  tage: 40,
  tsubject: "Computer scince",
};

Object.setPrototypeOf(student, teacher);

// console.log(student.name);
// console.log(student.age);
// console.log(student.subject);

// console.log(student.tname);
// console.log(student.tage);
// console.log(student.tsubject);

Object.prototype.getName = function () {
  console.log("My name is durgesh");
};

console.log(student.getName());

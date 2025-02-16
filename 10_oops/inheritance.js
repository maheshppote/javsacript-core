class Student {
  constructor(studentName) {
    this.studentName = studentName;
  }

  getStudentName() {
    console.log(`My name is ${this.studentName}`);
  }
}

class Teacher extends Student {
  constructor(studentName, Subject, age) {
    super(studentName);
    this.Subject = Subject;
    this.age = age;
  }
  addCourse() {
    console.log(`A new course was added by ${this.studentName}`);
  }
}

const t1 = new Teacher("Mahesh", "CS", 35);
const st1 = new Student("Mahesh");

t1.addCourse();
t1.getStudentName();

st1.getStudentName();

console.log(t1 instanceof Teacher);
console.log(st1 instanceof Student);

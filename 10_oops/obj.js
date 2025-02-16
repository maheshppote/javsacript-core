const User = {
  name: "Mahesh",
  age: 25,
  getUserdetails: function () {
    console.log(`I am ${this.name}. I'm ${this.age} year old`);
  },
};

// console.log(User);

console.log(User.getUserdetails());

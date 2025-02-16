class User {
  constructor(userName, uniqueID) {
    this.userName = userName;
    this.uniqueID = uniqueID;
  }

  static getUniqueID(user) {
    console.log(`User's unique ID: ${user.uniqueID}`);
  }

  static getUniqueID2() {
    console.log(`User's unique ID: ${this.uniqueID}`);
  }
}

const u1 = new User("Mahesh", 2002);
// u1.getUniqueID2(); // User's unique ID: 2002; without static
// u1.getUniqueID2(); // TypeError: u1.getUniqueID2 is not a function
// User.getUniqueID(u1); // User's unique ID: 2002;

console.log(u1.userName);

/*
1. Use static for methods/properties that belong to the class itself.
2. Static methods cannot access instance-specific data directly.
3. Instance methods can access instance-specific data using this.*/

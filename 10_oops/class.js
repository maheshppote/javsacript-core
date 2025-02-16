// class User {
//   constructor(userName, emailAddress, Password) {
//     this.userName = userName;
//     this.emailAddress = emailAddress;
//     this.Password = Password;
//   }

//   encryptedPassword() {
//     return `${this.Password}abc`;
//   }

//   getUserName() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const userd1 = new User("Mahesh", "Mahesh@amazon.com", "Shambo@2025");
// const userd2 = new User("hitesh", "Mahesh@amazon.com", "Shambo@2025");
// console.log(userd1.encryptedPassword());
// console.log(userd1.getUserName());
// console.log(userd2.encryptedPassword());
// console.log(userd2.getUserName());

// What happens behind the scene

function User(UserName, EmailAddress, Password) {
  this.UserName = UserName;
  this.EmailAddress = EmailAddress;
  this.Password = Password;
}

const userd1 = new User("Mahesh", "Mahesh@amazon.com", "Shambo@2025");
const userd2 = new User("hitesh", "Mahesh@amazon.com", "Shambo@2025");

User.prototype.encryptedPassword = function () {
  return `${this.Password}abc`;
};

User.prototype.getUserName = function () {
  return `${this.UserName.toUpperCase()}`;
};

console.log(userd1.encryptedPassword());
console.log(userd1.getUserName());
console.log(userd2.encryptedPassword());
console.log(userd2.getUserName());

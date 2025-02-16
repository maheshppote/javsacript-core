function getUserName(userName) {
  this.userName = userName;
  console.log("Called");
}

function askMe(userName, age, contact) {
  getUserName.call(this, userName);

  this.age = age;
  this.contact = contact;
}

const getDetails = new askMe("Mahesh", 35, 7020203223);
console.log(getDetails);

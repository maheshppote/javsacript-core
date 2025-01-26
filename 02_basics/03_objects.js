// Singleton
// Object.create

// object literals

// assinge a symbol key in the below object

const mySym = Symbol("ke1");

const jsUser = {
    name : "Mahesh",
    "full name" : "Mahesh Pote",
    age : 35,
    location : "Pune",
    qualification : "MCA",
    email : "mpote97@gmail.com",
    isLogin : false,
    lastLoginDays : ["Monday", "friday"],
    [mySym] : "symkey"
}

console.log(jsUser.name);
console.log(jsUser["full name"]);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);
console.log(jsUser);

jsUser.email = "devex2018@gmail.com";
console.log(jsUser);

// freez the object so noone can update the object vlaues

// Object.freeze(jsUser);
jsUser.email = "maheshpote@google.com";
console.log(jsUser);

// add function in an object
console.log("------function added---------")
jsUser.greetings = function() {
    console.log("Good Morning!!")
}

console.log(jsUser.greetings);
console.log(jsUser.greetings());

// get the reference value from the obj

jsUser.greetings2 = function() {
    console.log(`hello ${this.age}`)
}

console.log(jsUser.greetings2());
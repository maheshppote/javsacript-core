// let's look at an example where global scope pollution can cause problems:

// problem :

// Global vairables

var greeting = "Good morning!";

function sayHello(){
  greeting = "Hello" // Overwriting the global variable
  console.log(greeting)
}

function goodBye(){
  greeting = "Good bye" // Overwriting the global variable again
  console.log(greeting) 
}

// console.log(sayHello());
// console.log(goodBye());
// console.log(greeting); 

// Slove the problem:

var greeting2 = "Good Day";

(function sayHello2(){
  var greeting2 = "Hello Mahesh";
  console.log(greeting2)
})();

(function goodbye2(){
  var greeting2 = "Good by mahesh";
  console.log(greeting2)
})();

console.log(greeting2);
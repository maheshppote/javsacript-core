// IIFI - Immediately Invoked Function Expressions IIFE

(function chai() {
  console.log("DB connected!");
})(); // Semicolon ; is must when you use another iffi just after previos iffi.

(() => {
  console.log("mongo db connected!");
})();


var globalVar = "I'm a global variable";

(function() {
    var localVar = "I'm a local variable";
    console.log(localVar); // Output: I'm a local variable
})();

console.log(globalVar); // Output: I'm a global variable
console.log(localVar); // Error: localVar is not defined

// Sure, let's look at an example where global scope pollution can cause problems:


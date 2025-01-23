// lets discuss about memory stack and heap

// Memory Stack and Heap
// In JavaScript, memory is divided into two parts: stack and heap.

// 1. Memory Stack
// The memory stack is used to store primitive values and function calls.
// When a function is called, a new frame is pushed onto the stack.
// When the function returns, the frame is popped off the stack.
// The memory stack is a LIFO (Last In, First Out) data structure.
// The memory stack is fast but limited in size.
// The memory stack is used for static memory allocation.
// The memory stack is thread-safe.
// The memory stack is automatically managed by the JavaScript engine.

// 2. Memory Heap
// The memory heap is used to store objects and arrays.
// The memory heap is a large pool of memory.
// The memory heap is used for dynamic memory allocation.
// The memory heap is not thread-safe.
// The memory heap is manually managed by the developer.
// The memory heap is slower but has no size limit.

// Example: Memory Stack and Heap
// In this example, we will see how memory stack and heap work in JavaScript.

// Primitive values are stored in the memory stack.
let x = 10; // x is stored in the memory stack
let y = "Hello"; // y is stored in the memory stack
let z = true; // z is stored in the memory stack

// Objects are stored in the memory heap.
let person = { name: "John", age: 30 }; // person is stored in the memory heap
let numbers = [1, 2, 3, 4, 5]; // numbers is stored in the memory heap

// Function calls are stored in the memory stack.
function greet() {
  console.log("Hello, World!");
}

greet(); // greet is stored in the memory stack

// In this example, the primitive values x, y, and z are stored in the memory stack.
// The objects person and numbers are stored in the memory heap.
// The function greet is stored in the memory stack.


debugger;
sayHi();
const username = "Harshit Upreti";
const age = 22;
// This is the global execution context. It is created when the JavaScript code starts executing. It is of highest priority.

function sayHi() {
  const a = 10;
  const b = 20;
  addTwoNumber(7, 9);
  // This is the execution context of the sayHi function. It is created when the sayHi function is called. It is of lower priority than the global execution context.
}
// sayHi() is in local execution context. It has its own environment and has its own memory creation phase where it takes undefined for a and b. It also has its own code execution phase where it assigns values to a and b .

// const and let are script level scope. Whereas var is global level scope. This means that const and let are only accessible within the block they are defined in, whereas var is accessible throughout the entire program. In this code, username and age are defined using const, so they are only accessible within the global execution context. They cannot be accessed within the sayHi function or any other function.
function addTwoNumber(x, y) {
  return x + y;
}

// sayhi() is a local execution context inside a global execution context and addTwoNumber() is a local execution context inside sayHi() execution context. When we call sayHi(), it creates a new execution context for sayHi() and when we call addTwoNumber() inside sayHi(), it creates a new execution context for addTwoNumber(). The execution contexts are created in a stack-like manner, where the global execution context is at the bottom of the stack and the local execution contexts are added on top of it as they are created. When a function finishes executing, its execution context is removed from the stack and control is returned to the previous execution context.

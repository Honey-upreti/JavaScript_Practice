"use strict";
// This is a mode in JavaScript that helps us to write cleaner code and avoid some common mistakes. It is a good practice to use strict mode in our JavaScript code because it helps us to catch errors early and makes our code more secure. In strict mode, we cannot use undeclared variables, we cannot delete variables, we cannot use duplicate parameter names in functions, and many other things that can lead to bugs in our code. To enable strict mode, we can simply add the string "use strict" at the beginning of our JavaScript file or function.
const username = "harshit";
let userAge = 18;
var city = "Delhi";

// function add() {
//     debugger
//     const username = "harsh";
//   const a = 10;
//   const b = 20;
//   console.log(a + b);
//   console.log(username);
// }

function subtract() {
  const a = 10;
  const b = 20;
  const z = 30;
  // console.log(a - b);
  // console.log(username);

  function child() {
    // debugger;
    const childname = "golu";
    // console.log(childname);
    // console.log(z);
    if (true) {
      const num1 = 100;
      var num2 = 200;
    }
    // console.log(num1);
    // this will throw an error because num1 is declared inside the block and we cannot access it outside the block.Hence this is known as block scope of num1 variable.
    // when we declare a variable inside a block using let or const then we cannot access that variable outside the block however if we declare a variable inside a block using var then we can access that variable outside the block because var is function scoped and not block scoped.
    console.log(num2);
    // num2 can inside child function but not inside subtract function because num2 is declared using var and var is function scoped and not block scoped.
  }
  child();
}
// child function can access parent function as well as global variables and this is known as lexical scope of child function but we cannot access child variables in parent function as well as global scope.
// every child function has access to its parent function variables and global variables but parent function cannot access child function variables and global scope cannot access child function variables.
// add();
subtract();

// console.log(a + b);
// console.log(childname);
// this will throw an error because childname is a variable declared inside the child function and we cannot access it outside the child function as well as parent function and global scope.
console.log("Program ended");

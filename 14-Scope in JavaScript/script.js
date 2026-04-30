const username = "harshit";
let userAge = 18;
var city = "Delhi";
// const and let are script scope while var is window object scope(global scope). And both script scope and window object scope are global scope but the difference is that script scope is only accessible within the script while window object scope is accessible throughout the window object.

function add() {
    debugger
    const username = "harsh";
  const a = 10;
  const b = 20;
  console.log(a + b);
  console.log(username);
}

function subtract() {
  const a = 10;
  const b = 20;
  console.log(a - b);
  console.log(username); //in this username will be "harshit" because it is in the global scope and can be accessed from any function.
}
add();
subtract();

console.log(a + b);
// error because a and b are not defined in this scope

console.log("Program ended");
// This line will not be executed as once the error occurs, the program will stop executing further lines of code.

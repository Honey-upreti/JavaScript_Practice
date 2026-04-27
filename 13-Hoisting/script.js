// debugger;

console.log(a);
var a = "Harshit";
// If we run the above code, it will not throw an error because of hoisting. The variable declaration (var a) is hoisted to the top of its scope, but the assignment (a = "Harshit") is not. Therefore, when we try to log 'a' before the assignment, it will output 'undefined' instead of throwing an error.

// However, if we use 'let' or 'const' instead of 'var', it will throw a ReferenceError because they are not hoisted in the same way as 'var'. They are in a "temporal dead zone" until their declaration is evaluated.

hi();

// fucntion definition
// function declaration
function hi() {
  console.log("Hi");
}
// This function is properly hoisted, so we can call it before its declaration without any issues. The entire function declaration is hoisted to the top of its scope, allowing us to call 'hi()' before it is defined in the code.

// other way to create a function
sayhi();

// function definition
// function expression
var sayhi = function () { //anonymous function expression
  console.log("Hi");
};

// sayhi();

// both function declaration and function expression are function definitions, but they are hoisted differently. The function declaration is hoisted entirely, while the function expression is not hoisted in the same way. The variable 'sayhi' is hoisted, but it is initialized with 'undefined' until the assignment is executed. Therefore, when we try to call 'sayhi()' before the assignment, it will throw a TypeError because 'sayhi' is not a function at that point.

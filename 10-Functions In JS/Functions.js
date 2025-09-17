// This is a function definition. 
// The `function` keyword is used, followed by the function's name and parentheses.
// The code to be executed is placed inside the curly braces `{}`.
function introduceMe() {
    console.log("Hey");
    console.log("My name is Harshit Upreti");
    console.log("I am a Btech Student");
}

// To use or "call" the function, you write its name followed by parentheses `()`.
introduceMe();

// Here, `username` and `profession` are parameters.
function introduceMe(username, profession) {
    console.log(`Hi, my name is ${username}.`);
    console.log(`I am a ${profession}.`);
}

// When the function is called, the values "Anurag" and "Software Developer" 
// are passed as arguments for the `username` and `profession` parameters, respectively.
introduceMe("Harshit", "Btech student");
introduceMe("Dibyanshu", "Biology student");

// The return statement allows a function to produce and send back a value.
// This returned value can then be used in other parts of your code.
// This function adds two numbers and returns the result.
function add(a, b) {
    return a + b;
}

// The returned value (8) is stored in the `sum` variable.
let sum = add(5, 3);
console.log(sum); // Output: 8

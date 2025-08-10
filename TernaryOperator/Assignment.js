// Chaining ternary operators lets us to handle more than two outcomes in a single line, similar to an if-else if-else statement.
// However, it's generally not recommended because it can make our code harder to read and debug.

const age = 0 ? 'harshit' : '' ? 'hi' : "hello"
console.log(age);
// Output = "hello"
// As 0 is a falsy value it will print empty string '', in further chain as '' is also a falsy value it will print "hello" in final output

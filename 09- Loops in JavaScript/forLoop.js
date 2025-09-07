// A for loop is a control flow statement that allows you to execute a block of code repeatedly. 
// It is a more structured and concise way to create loops compared to other methods like the while loop. 
// The basic syntax of a for loop is composed of three main parts, all within the parentheses ():
for (initialization; condition; increment/decrement) {
  // code to be executed
}

// This example demonstrates a simple for loop that prints numbers from 1 to 10.
// This loop will execute 10 times.
// 1. `let i = 1;` initializes the counter `i` to 1.
// 2. `i <= 10;` is the condition. The loop continues as long as `i` is less than or equal to 10.
// 3. `i++` increments the value of `i` by 1 after each run.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Checking for Even Numbers
// This example shows how a for loop can be combined with a conditional statement (if) to perform a specific task within each iteration. 
// The code prints all even numbers from 0 to 100.
// This loop iterates through numbers from 0 to 100.
for (let i = 0; i <= 100; i++) {
  // The modulo operator (%) returns the division remainder.
  // If `i % 2` is 0, it means `i` is an even number.
  if (i % 2 === 0) {
    console.log(i);
  }
}

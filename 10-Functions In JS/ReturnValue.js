/**
 * A simple function that adds two numbers together.
 * The `return` keyword gives the result back.
 */
function addNumbers(num1, num2) {
  // This line calculates the sum.
  const sum = num1 + num2;
  
  // The `return` keyword is used to send the 'sum' value out of the function.
  return sum;
}

// Now, we can call the function and use its result.
// The result of 'addNumbers(5, 7)' is the value 12.
let total = addNumbers(5, 7);

// We can then print and use this result.
console.log(total);
// Output: 12



// --- Function without a `return` statement ---

/**
 * This function only prints the result to the console.
 * It does not use `return`.
 */
function logNumbers(num1, num2) {
  // This line just prints the value directly.
  console.log(num1 + num2);
}

// When you call this function, it prints to the console.
// But it doesn't return a value for you to store.
let result = logNumbers(10, 20); // This prints 30.

// The variable 'result' is now `undefined` because nothing was returned.
console.log(result); 
// Output: undefined

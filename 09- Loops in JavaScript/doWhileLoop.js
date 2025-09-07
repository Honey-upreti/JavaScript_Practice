// The do-while loop is a control flow statement that guarantees a block of code 
// will be executed at least once before the loop's condition is checked.
// This is the key difference between a do-while and a standard while loop, where the condition is checked at the beginning.

do {
  // code to be executed
} while (condition);

// This example demonstrates a do-while loop that prints numbers from 0 to 4.
// Even if the initial value of i made the while condition false (e.g., if i was 5),
// the code inside the do block would still run once.

let i = 0; // Initialize the counter variable `i` to 0.

// The code inside the `do` block will always execute at least once.
do {
  console.log(i); // This prints the current value of `i`.
  i++;            // This increments `i` by 1 after each iteration.
} while (i < 5); // The loop continues as long as `i` is less than 5.

// The output of this code will be:
0
1
2
3
4

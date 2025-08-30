// This program provides two examples of while loops in JavaScript.
// The first example uses a while loop to print numbers from 1 to 10. 
// The second example shows how to use a while loop to iterate through an array of strings and print each item.

// Example 1: Using a while loop to print numbers from 1 to 10

// Initialize a counter variable. This is the starting point of our loop.
let i = 1;

// Start the while loop. The loop will continue to run as long as 'i' is less than or equal to 10.
while (i <= 10) {
  // Print the current value of 'i' to the console.
  console.log(i);

  // Increment 'i' by 1. This is crucial to ensure the loop eventually stops.
  // Without this step, 'i' would always be 1, and the loop would run forever (an infinite loop).
  i++;
}

// Add a separator for better readability in the console
console.log("--------------------");


// Example 2: Using a while loop to iterate through an array

// Define an array of strings
const friends = ["Alice", "Bob", "Charlie", "David"];

// Initialize a new counter variable for this loop, starting at index 0.
let j = 0;

// Start the while loop. The loop will run as long as 'j' is less than the total number of items in the array (friends.length).
while (j < friends.length) {
  // Print the friend's name at the current index 'j'.
  console.log(friends[j]);

  // Increment 'j' to move to the next item in the array in the next loop iteration.
  j++;
}

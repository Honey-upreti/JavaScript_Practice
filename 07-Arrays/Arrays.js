// A simple program to demonstrate key concepts of JavaScript arrays.

// 1. Creating an array
// An array is a collection of items stored in a single variable.
// We use square brackets [] to create an array.
// This array contains strings, but arrays can hold any data type.
const fruits = ['Apple', 'Banana', 'Grapes', 'Dates'];

console.log('Original Array:', fruits);
// The .length property tells us how many elements are in the array.
console.log('Array Length:', fruits.length);

// 2. Accessing array elements
// Array elements are accessed using zero-based indexing.
// The first element is at index 0, the second at index 1, and so on.
// The value 'Grapes' is at index 2.
const myFavoriteFruit = fruits[2];
console.log('My favorite fruit is:', myFavoriteFruit);

// 3. Modifying an element
// You can change the value of an element by assigning a new value to its index.
// We are changing 'Grapes' (at index 2) to 'Mango'.
fruits[2] = 'Mango';
console.log('Array after modifying an element:', fruits);

// 4. Adding elements with .push()
// The .push() method adds a new element to the end of the array.
// It modifies the original array and returns the new length.
fruits.push('Strawberry');
console.log('Array after adding with .push():', fruits);
console.log('New array length after push:', fruits.length);

// 5. Removing elements with .pop()
// The .pop() method removes the last element from the array.
// It returns the removed element and modifies the original array.
const removedFruit = fruits.pop();
console.log('Array after removing with .pop():', fruits);
console.log('The removed fruit was:', removedFruit);

// 6. Demonstrating .length property after modifications
// The .length property is dynamic and automatically updates.
console.log('Final array length:', fruits.length);

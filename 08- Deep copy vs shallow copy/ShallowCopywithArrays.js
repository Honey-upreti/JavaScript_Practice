// Initial array of fruits
let fruits = ["Mango", "Apple", "Orange"];

// Create a new array and copy elements from 'fruits' using the spread operator
let myFruits = [...fruits];

// Add new fruits to the 'myFruits' array
myFruits.push("Grapes");
myFruits.push("Dates");

// The original 'fruits' array is not affected
console.log(fruits); // Output: ["Mango", "Apple", "Orange"]

// The new 'myFruits' array has the new fruits
console.log(myFruits); // Output: ["Mango", "Apple", "Orange", "Grapes", "Dates"]

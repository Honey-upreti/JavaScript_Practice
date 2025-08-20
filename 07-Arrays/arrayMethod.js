// 1. shift()
// The shift() method removes the first element from an array. It mutates the original array and returns the removed element.

// Start with an array of even numbers
let evenNumbers = [2, 4, 6, 8, 10];

// The shift() method removes the first element (2)
let removedElement = evenNumbers.shift(); 

console.log(removedElement); // Output: 2
console.log(evenNumbers);    // Output: [4, 6, 8, 10]

// 2. unshift()
// The unshift() method adds one or more elements to the beginning of an array. It mutates the original array and returns the new length of the array.

// Start with an array of even numbers
let evenNumbers = [2, 4, 6, 8];

// The unshift() method adds -2 and 0 to the beginning
let newLength = evenNumbers.unshift(-2, 0); 

console.log(newLength);   // Output: 6
console.log(evenNumbers); // Output: [-2, 0, 2, 4, 6, 8]

// 3. concat()
// The concat() method is used to merge two or more arrays. It does not change the existing arrays; instead, it returns a new array.

// Define two arrays to merge
let evenNumbers = [2, 4, 6, 8];
let animals = ["dog", "cat", "rat", "lion"];

// The concat() method merges the two arrays into a new one
let mergedArray = evenNumbers.concat(animals);

console.log(mergedArray); // Output: [2, 4, 6, 8, "dog", "cat", "rat", "lion"]

// 4. indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array. If the element is not found, it returns -1.

// Define an array of animals
let animals = ["dog", "cat", "rat", "lion"];

// The indexOf() method returns the index of "cat"
console.log(animals.indexOf("cat"));   // Output: 1

// The indexOf() method returns -1 if the element is not found
console.log(animals.indexOf("tiger")); // Output: -1

// 5. includes()
// The includes() method checks whether an array contains a certain value and returns a boolean (true or false). This is useful for simple presence checks.

// Define an array of animals
let animals = ["dog", "cat", "rat", "lion"];

// The includes() method checks for the presence of "cat"
console.log(animals.includes("cat"));   // Output: true

// The includes() method checks for the presence of "tiger"
console.log(animals.includes("tiger")); // Output: false

// 6. reverse()
// The reverse() method reverses an array in place. This means it modifies the original array directly.

// Define an array of animals
let animals = ["dog", "cat", "rat", "lion"];

// The reverse() method reverses the array
animals.reverse();

console.log(animals); // Output: ["lion", "rat", "cat", "dog"]

// 7. sort()
// The sort() method sorts the elements of an array in place. By default, it sorts alphabetically for strings or based on Unicode values, which may not work as expected for numbers.

// Define an array of animals
let animals = ["dog", "cat", "rat", "lion"];

// The sort() method sorts the array alphabetically
animals.sort();

console.log(animals); // Output: ["cat", "dog", "lion", "rat"]

// 8. slice()
// The slice() method returns a shallow copy of a portion of an array into a new array. It takes a start and an end index (the end index is not included). The original array is not modified

// Define an array of animals
let animals = ["dog", "cat", "rat", "lion", "elephant", "cow", "tiger"];

// The slice() method extracts elements from index 2 up to (but not including) 5
let newAnimals = animals.slice(2, 5);

console.log(newAnimals); // Output: ["rat", "lion", "elephant"]

// 9. splice()
// The splice() method changes the contents of an array by either adding, removing, or replacing existing elements. It mutates the original array.

// Define an array of animals
let animals = ["dog", "cat", "rat", "lion", "elephant", "cow", "tiger"];

// The splice() method removes 1 element at index 2 ("rat") and adds "bear"
animals.splice(2, 1, "bear");

console.log(animals); // Output: ["dog", "cat", "bear", "lion", "elephant", "cow", "tiger"]

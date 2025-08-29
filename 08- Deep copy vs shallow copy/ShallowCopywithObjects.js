// This example demonstrates a shallow copy of an object using Object.assign(). 
// Like the spread operator, this method creates a new object but only copies the reference.

// Initial user object
let user1 = {
  firstName: "Anurag",
  lastName: "Singh"
};

// Create a new user object
let user2 = {};

// Copy properties from user1 to user2 using Object.assign
Object.assign(user2, user1);

// Update the lastName of user2
user2.lastName = "Pandey";

// Display the updated user2 object
console.log(user2); // Output: { firstName: "Anurag", lastName: "Pandey" }

// The original user1 object remains unchanged
console.log(user1); // Output: { firstName: "Anurag", lastName: "Singh" }

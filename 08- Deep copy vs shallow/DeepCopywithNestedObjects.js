// This example, while not explicitly shown in the video as a separate code block,
// demonstrates the concept of a deep copy using JSON.stringify and JSON.parse to completely disconnect the new object from the original.

// Initial object with a nested object
let userDetails = {
  name: "Anurag",
  address: {
    city: "New Delhi"
  }
};

// Perform a deep copy using JSON.stringify and JSON.parse
// This is an effective way to copy nested objects without linking them
let copiedUserDetails = JSON.parse(JSON.stringify(userDetails));

// Change a property in the copied object
copiedUserDetails.address.city = "Mumbai";

// The change in the copied object does not affect the original
console.log(userDetails.address.city); // Output: "New Delhi"

// The copied object has the updated value
console.log(copiedUserDetails.address.city); // Output: "Mumbai"

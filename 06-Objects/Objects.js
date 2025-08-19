// Objects are typically created using an object literal with curly braces {}.
// They store data in key-value pairs. The key is a string (or a valid identifier), and the value can be any data type, including other objects.
const user = {
  firstName: 'Harshit',
  lastName: 'Upreti',
  address: {
    city: 'Pithoragarh',
    pinCode: 262501,
    state: 'Uttarakhand',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}
// Objects can contain other objects as values, allowing you to create complex, hierarchical data structures.
// For e.g.- We have created moredetails inside address object

// function createuser(name, age) {
//   const user = {
//     name,
//     age,
//     // getbirthYear: createuser.commonMethods.getYear,
//   };
//   return user;
// }

// createuser.commonMethods = {
//   getYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

function Createuser(name, age) {
  this.name = name;
  this.age = age;
}


Createuser.prototype.getYear= function() {
    return new Date().getFullYear() - this.age;
  }


const user1 = new Createuser("harsh", 20);
const user2 = new Createuser("aman", 21);


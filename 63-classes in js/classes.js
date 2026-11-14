class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Aman", "Mishra", 32);
const user2 = new CreateUser("Harshit", "Upreti", 21);
// typeof class is a function. Hence

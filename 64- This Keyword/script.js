// function hi(){
//     // this.world = 'hello'
//     console.log(this);
// }
// const user1 = new hi()

// const user = {
//   name: "harsh",
//   lastName: "upreti",
//   age: 17,
//   tags: ["a", "b", "c"],
//   printtags() {
//     this.tags.forEach(function(tag) {
//       console.log(this);
//     }, this);
//   },
// };

// const h1 = document.querySelector('h1')

// h1.addEventListener('click',function(){
//     console.log(this);
// })

class User {
    constructor(){
        console.log(this);
    }
}

// --------------------------------------------------------------------

const person = {
  name: "Aman",

  showName() {
    const arrow = () => {
      console.log(this.name);
    };

    arrow();
  }
};

const anotherPerson = {
  name: "Harshit"
};

person.showName.call(anotherPerson);


function greet(city, country){
    console.log(`${this.name} lives in ${this.city} in ${this.country}`);
}
const user = {
    name: 'harsh'
}
greet.call(user, "pithoragarh", "india")
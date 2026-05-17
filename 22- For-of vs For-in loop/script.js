// const fruits = ['banana', 'apple', 'mango', 'peach','grapes']

// for(let i=0; i< fruits.length; i++) {
//     console.log(fruits[i]); 
// }

// for(const fruit of fruits) {
//     console.log(fruit);
// }


// const user ="harsh"

// for(const letter of user) {
// console.log(letter);
// }

const person = {
    firstName :"harsh",
    lastname : "upreti",
    Age : 20,
    city : "Pithoragarh",
}

for(const key in person) {
console.log(key,':',person[key]);
}

const personKeys = Object.keys(person)
for(key of personKeys) {
    console.log(person[key])
}

const personValues = Object.values(person)
const entries = Object.entries(person)
const num1 = [1, 2, 3, 4]
const num2 = [5, 6, 7, 8]
const myname = 'harsh'
const finalnum = [...num2, ...num1, ...myname]


const user = {
    name: "harsh",
    age: 19
}

const update = {
    ...user,
    father_name: "blahblah"
}

function add() {
    console.log(arguments)
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        sum = sum + arguments[i]
    }
    return sum
}

// function add() {
//     let sum = 0;
//     for(let i=0; i<finalnum.length; i++){
//         sum = sum + arguments
//     }
//     return sum
// }


// The JavaScript spread operator (...) is an ES6 feature that expands an iterable (like an array, string, or object) into its individual elements or properties. It is primarily used to make copies, combine data structures, or unpack values into function arguments without altering the original data
const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// for (const fruit in fruits) {
//     console.log(fruit);
// }

// fruits.forEach(function (x) {
//     console.log(x)
// }
// )

fruits.forEach((x) => {
    console.log(x)
}
)

function abc(el) {
    console.log(el);
}

fruits.forEach(abc)

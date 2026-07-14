const num1 = [1, 2, 3, 4]

// function add(a, b,c, ...nums) { //rest parameter must be last in a list
// console.log(a, b,c);
// console.log('nums: ', nums)
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum = a + b + sum + nums[i]
//     }
//     return sum
// }

function add(...nums) { //rest parameter must be last in a list
    return nums.reduce((acc, curr) =>
        acc + curr
    )
}

// function add(...nums) { 
//     return [...arguments].reduce((acc, curr)=>      
//      acc+curr
//     )
// }

// function add(...nums) { 
//     return Array.from(arguments).reduce((acc, curr)=> 
//      acc+curr
//     )
// }

const result = add(89, 90, 91)  //If no value is passed in rest parameter, empty array will be reflect ([ ])

// Rest paramater is used in function definition while spread operator is used when function calling,
// spreading a value of array into another array, spreading values of one object into another 
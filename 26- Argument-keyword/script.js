//  const add = () =>{
//     let sum =0;
//     for(let i=0; i< arguments.length; i++){
//         // console.log(arguments[i])
//         sum = sum + arguments[i]
//     }
//     return sum 
    
// }


//  function add(){
//     let sum =0;
//     for(let i=0; i< arguments.length; i++){
//         console.log(arguments)
//         sum = sum + arguments[i]
//     }
//     return sum 
    
// }

// converting argument keyword into array
//  function converttoarray () {
//     const argsarray = [...arguments]
//     // console.log(arguments)

//     return argsarray
//  }


// Write a standard function called onlyStrings() that accepts any number of arguments of mixed data types (numbers, strings, booleans).

function test () {
    const strings = [...arguments]  //here I converted arguments into array 

    const onlystrings = strings.filter((month)=>{  //here I filtered that array to return only string value
        return typeof month === "string"
    });
return "only string is " + onlystrings
}


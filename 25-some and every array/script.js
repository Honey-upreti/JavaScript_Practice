const evennumbers = [2, 4, 10,6, 8,6,10,14,12,3]

// const result = evennumbers.some((nums,i) => {
//     if(nums%2===1){
//         console.log(nums + " is in index " + i);
        
//     }
//     return nums%2===1
// })

const result = evennumbers.every((nums) => {
    debugger
    return nums%2===0
})
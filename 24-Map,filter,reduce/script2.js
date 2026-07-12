const nums = [140,2,3]

nums.reduce((accumulator, current, index)=>{
    // console.log(index,current)
    console.log(accumulator, current)
    return accumulator+current 
},20)
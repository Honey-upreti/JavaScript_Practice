const nums = [1,2,3]

nums.reduce((accumulator, current, index)=>{
    // console.log(index,current)
    console.log(accumulator)
    return accumulator + current
},0)
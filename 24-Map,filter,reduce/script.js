const months = ["january", 'february', "March", "april", "May", 'december']

// const capital= months.forEach((month, index)=>{
//     console.log(index+1, month)
//     return month.toUpperCase()
// })

const capital = months.map((month, index, array) => {
    //     // console.log(index+1, month)
    //     // console.log(array)
    return month.toUpperCase()
})

// const filteredMonth= months.filter((month, index, array)=>{
//     console.log(month)
//     // console.log(array)
//     return month.toLocaleUpperCase().includes('M')
// })

const filteredMonth = months.filter((month, index, array) => {
    // console.log(month)
    // console.log(array)
    return index >= 3
})

const students = [
    {
        Name: 'Harsh',
        age: 21,
    },
    {
        Name: 'Ankit',
        age: 17,
    },
    {
        Name: 'Gaurav',
        age: 19,
    },
    {
        Name: 'Amir',
        age: 15,
    },
    {
        Name: 'Abhi',
        age: 13,
    },
]

const adult = students.filter((student) => {
    return student.age >= 18
}).map((student) => {
    return student.Name
}).filter((student) =>{
    return student.includes('G')
})
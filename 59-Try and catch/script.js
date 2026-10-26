// const user = {
//     name: 'harsh',
//     age: 17
// }

// try {
//   console.log(user.address.city);
// } 
// // catch (err) {
// //   console.dir(err);
// // }
// finally{
//     console.log('hello world');
// }

// console.log(5 + 7);

async function makeRequest() {
    try{
        const url = "https://httpbin.org/delay/2";
    const response = await fetch(url)
   const data = await response.json()
    console.log(data);
    console.log("hii")
    return data
    }
    catch(err){
        console.log(err);
    }
}
makeRequest()
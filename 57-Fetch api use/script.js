// fetch("https://dummyjson.com/products")
//   .then((a) => a.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     category: 'stationary'
//     /* other product data */
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log).catch((error)=>{
//     console.log(error);
//   })



//   --------changing xhr function to fetch------------

fetch('https://dummyjson.com/users')
.then((res)=>
    res.json()
).then((usersdata)=>{
    console.log(usersdata);
    return fetch(`https://dummyjson.com/posts/user/${usersdata.users[0].id}`)
}).then((res)=>
    res.json()
).then((posts)=>{
    console.log(posts);
    return fetch(`https://dummyjson.com/comments/post/${posts.posts[0].id}`)
}).then((res)=>
    res.json()
).then((comments)=>{
    console.log(comments);
    return fetch(`https://dummyjson.com/users/${comments.comments[0].user.id}`)
}).then((res)=>
res.json()).then((userdata)=>{
    console.log(userdata);
}).catch((error)=>{
    console.log('ji ye galat ho gya ')
})
const colors = ['red','green', 'white', 'black','pink', 'orange']

// const colors2 = colors[0]
// const colors3 = colors[1]
// const colors4 = colors[2]

// const [color1,color2,color3,color4] = colors  //most common way

// const [,,color3] = colors
const {3: color4, 5: color5} = colors
// console.log(color4,color5);


const user = {
    name: 'harsh',
    age: 20,
    address: {
        city: 'Pithoragarh',
        state: 'uttarakhand'
    }
}

// const name = user.name
// const age = user.age

const {name, age} = user    //most common way
// const {name: username, age: userage} = user
const{address:{city}} = user

// const{address}= user
// const{city} = address

function intro({age,name,address:{city}}){
console.log(age,name,city);
}

intro(user)

// function intro({age,name}, {address:{city}}){
// console.log(age,name,city);
// }

// intro(user,user)

function printcolor({4:color5}){
    console.log(color5);
    
}

printcolor(colors)

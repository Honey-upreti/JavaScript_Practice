const h1 = document.querySelector('h1')

function sayHi (){
    console.log('hiiiii')
}
function secondhi(){
    console.log("2nd hi")
}

// h1.onclick = sayHi
// h1.onclick = secondhi

// Most used method 
// h1.addEventListener("click", sayHi)
// h1.addEventListener("click", function(){
//     console.log("2nd hi")
// })
const card = document.querySelector('.card')
const container = document.querySelector(".container")
function addcard(){
    const newcard = document.createElement('div')
    newcard.classList.add('card')
    container.appendChild(newcard)
}


card.addEventListener("click",addcard)
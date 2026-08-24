const h1 = document.querySelector('h1')

function sayHi() {
    console.log('hiiiii')
}
function secondhi() {
    console.log("2nd hi")
}

// h1.onclick = sayHi
// h1.onclick = secondhi

// Most used method 
// h1.addEventListener("click", sayHi)
// h1.addEventListener("click", function(){
//     console.log("2nd hi")
// })

let count = 0
const card = document.querySelector('.card')
const container = document.querySelector(".container")
function addcard() {
    const newcard = document.createElement('div')
    newcard.classList.add('card')
    // const newcard = card.cloneNode()
    // newcard.classList.remove('add-card')  //cloneNode copies whole classes of an element hence we have to remove that class which we don't need
    newcard.innerText = count
    count++
    container.appendChild(newcard)
}
card.addEventListener("click", addcard)


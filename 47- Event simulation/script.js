const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector("form")

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

//  const intervalid = setInterval(()=>{
//     if(count > 999){
//         clearInterval(intervalid)
//     }
//     addCardBtn.click()
// },10)

// setTimeout(() => {
//     input.focus()
//     console.log("input focused");
// }, 2000)

// setTimeout(() => {
//     input.blur()
//     console.log("input blur");
// }, 4000)

// setTimeout(() => {
//     form.submit()
//     console.log("form submit");
// }, 4000)

// form.reset()
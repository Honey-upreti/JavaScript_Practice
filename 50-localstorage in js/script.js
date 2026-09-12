const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
nameElement.innerText = localStorage.getItem('myName')  
// this is when we reload, to hold the text
const ageInput = document.querySelector('.age')
const ageElement = document.querySelector('.age-tag')

// nameInput.addEventListener('input', (e) => {
//     // localStorage.myName = e.target.value;
//     localStorage.setItem('myName', e.target.value)
//     nameElement.innerText = localStorage.getItem('myName')
//   //this is when we type anything in input we see the result as text

// })

// ageElement.innerText = localStorage.getItem('myage')

// ageInput.addEventListener('input', (e) => {

//     localStorage.setItem('myage', e.target.value)
//     ageElement.innerText = localStorage.getItem('myage')

// })

const mydata = JSON.parse(localStorage.getItem('mydata'))  || {}

nameInput.addEventListener('input',(e)=>{
    mydata.name = e.target.value
    localStorage.setItem('mydata', JSON.stringify(mydata))
    nameElement.innerText = e.target.value

})

ageInput.addEventListener('input',(e)=>{
     mydata.age = e.target.value
    localStorage.setItem('mydata', JSON.stringify(mydata))
    ageElement.innerText = e.target.value
})

ageElement.innerHTML = mydata.age
nameElement.innerText = mydata.name
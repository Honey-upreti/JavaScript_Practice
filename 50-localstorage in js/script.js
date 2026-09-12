const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
nameElement.innerText = localStorage.getItem('myName')  // this is when we reload, to hold the text
const ageInput = document.querySelector('.age')
const ageElement = document.querySelector('.age-tag')

nameInput.addEventListener('input', (e) => {
    // localStorage.myName = e.target.value;
    localStorage.setItem('myName', e.target.value)
    nameElement.innerText = localStorage.getItem('myName')  //this is when we type anything in input we see the result as text

})

ageElement.innerText = localStorage.getItem('myage')

ageInput.addEventListener('input', (e) => {

    localStorage.setItem('myage', e.target.value)
    ageElement.innerText = localStorage.getItem('myage')

})
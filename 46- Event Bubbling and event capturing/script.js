const pink = document.querySelector('.pink')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')

// green.addEventListener('click', (e) => {
//     console.log("3. green event click");
// },)

// pink.addEventListener('click', (e) => {
//     console.log("2. pink event click");
// },)

blue.addEventListener('click', (e) => {
    console.log("1. blue event click");
},{capture: true, once: true})
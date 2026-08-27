const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')

// usernameInput.addEventListener('click', () =>{
//     console.log('name passed here!');
// })

// usernameInput.addEventListener('dblclick', () =>{
//     console.log('name passed here twice!');
// })

// let inputvalue

// usernameInput.addEventListener('input', (e) =>{
//     console.log(e.target.value)
//     inputvalue = e.target.value
//     // console.log('input event fired!');
//     paragraph.innerText = e.target.value
// })
 
// usernameInput.addEventListener('change', (e) =>{
//     console.log(e)
//     inputvalue = e.target.value
//     // console.log('input event fired!');
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('focus', (e) =>{
//     console.log(e.type)
//     inputvalue = e.target.value
//     // console.log('input event fired!');
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('blur', (e) =>{
//     console.log(e.type)
//     inputvalue = e.target.value
//     // console.log('input event fired!');
//     paragraph.innerText = e.target.value
// })

const form = document.querySelector('form')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const myformdata = new FormData(form)
//     for(const p of myformdata.entries()){
//         console.log(p)
//     }
// })

form.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e.target)
    console.log(e.currentTarget)
})
const button = document.querySelector('button')
const img = document.querySelector('img')

button.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json'
    console.log(xhr);
    xhr.onload = ()=>{
        console.log(xhr.response)
        img.src = xhr.response.message
    }
    xhr.open('GET','https://dog.ceo/api/breeds/image/random')
    xhr.send();
})
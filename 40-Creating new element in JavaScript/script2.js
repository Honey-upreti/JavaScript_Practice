const container = document.querySelector('.container')
const button = document.querySelector('button')

// let i = 1
button.addEventListener('click',()=>{
            fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*1000)+1}`)
  .then(response => response.json())
  .then(json => {console.log(json)
    const imagecontainer = document.createElement('div')
    const image = document.createElement('img')
    const paragraph = document.createElement('p')
    image.src = json.sprites.front_default;
    paragraph.innerText = json.name
    imagecontainer.append(image,paragraph)
    container.appendChild(imagecontainer)
  })
//   i++
})


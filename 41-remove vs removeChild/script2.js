let container = document.querySelector('.container')



// img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"

// paragraph.innerText = '2'

// imgContainer.append(img,paragraph)

for (let i = 2; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    const img = document.createElement('img')
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    const paragraph = document.createElement('p')
    paragraph.innerText = i
    imgContainer.append(img, paragraph)
    container.appendChild(imgContainer)

}

const myimg = document.querySelector("body > div > div:nth-child(7)")
// myimg.remove()
container.removeChild(myimg)
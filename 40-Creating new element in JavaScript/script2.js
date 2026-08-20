const container = document.querySelector('.container')



// img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"

// paragraph.innerText = '2'

// imgContainer.append(img,paragraph)

for (let i = 1; i <= 100; i++) {
            const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    const img = document.createElement('img')
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    const paragraph = document.createElement('p')
    paragraph.innerText = i
    imgContainer.append(img,paragraph)
    container.appendChild(imgContainer)


//     // const myhtml = `<img
//     //       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
//     //     />
//     //     <p>${i}</p>`

//     // imgContainer.innerHTML = myhtml
}


// let myhtml = ``

// for (let i = 1; i <= 10; i++) {
//     myhtml += `<div class="img-container">
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
//         />
//         <p>${i}</p>
//         </div>`
//         container.innerHTML = myhtml

// }

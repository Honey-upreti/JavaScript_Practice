document.querySelector('h1').style.color = 'hotpink'

// when we select h1 and it's style, the JS will return object with CSS properties, whoever all properties have inline values (values given in html file)
// So if we try to acces properties from CSS file, it will return empty string, it can only access Inline styles only
// This topic comes under DOM manipultaion, as we are changing the original properties

// here we applied red in css, but the specificity of inline style is more than css style. Hence we see 'hotpink' in h1

// for(let i=document.querySelectorAll('a');i<5;i++){
// i.style.color = 'teal'
// }



// Different Methods to change style of anchor tag

// Method1
const alllink = document.querySelectorAll('a')

// for(let i=0; i<alllink.length; i++){
//     alllink[i].style.color='teal'
//     alllink[i].style.textDecoration= 'none'
// }


for (const links of alllink) {
    // Method2
    // links.style.color = 'teal'
    // links.style.textDecoration = 'none'
    // links.style.fontWeight = 1000
    // links.style.fontFamily = 'cursive'

    // Method3
    // links.style.cssText = `color: red;
    // font-family: cursive
    // font-size: 20px;
    // font-style: italic;
    // font-weight: 700;`

    // Method4
    // links.className='green-link wavy-line'
    // links.setAttribute('class', 'green-link wavy-line')

    // Method5  (Most useful) As we do not have to write css in javascript, we just have to add class using classList and apply properties on CSS
    links.classList.add('green-link')
}



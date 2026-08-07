// const allImages = document.images
// const allImages = document.getElementsByTagName('img')
// const cssImg = document.getElementsByClassName('css-img')[0]
// const cssImg = document.getElementById('css-img')
// const cssImg = document.querySelector('.class')
// const cssImg = document.querySelectorAll('.class')

// getElementByTagName and getElementsByClassName returns array of the elements, whereas getElementById return unique value if value is not matched it returns Null
// As IDs are unique, hence getElementByID return only one value with it's ID given

// queryselector is a wildcard which can be used to select any element. Like CSS, we use '.' for class and '#' for ID to select these elements respectively
// queryselectorAll can return elements with same ID, unlike in previous cases where IDs should be unique, it doesn't matter for this method

// const jsImg = document.querySelector('[alt="javascript roadmap"]')
const li = document.querySelector('ul li') //li inside ul

const ul = document.querySelector('ul')
const imginsideUl = ul.querySelector('.css-img') //now queryselector will find img inside ul not in whole document


// -----------------------------------------------------------------

const allImages = [...document.images]
// const allImages = document.querySelectorAll('img')

const img = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1w_vze5mPswzuucM4TWjOScBZWUNNGSC4d2Cm0KzcN8-BpoQwhdyDrkL&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsmb66NmcfBSBKxRRw2lukSw0ZG0HAnr6yGvSMnkxPjH84kMTfO9w0dn9&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL01aWwplBrEdCCfzDLkwYc57wBs3NKl3Z1feJn_HgIw&s=10'
]

// allImages[0].src = img[0]
// allImages[1].src = img[1]
// allImages[2].src = img[2]

// for(let i=0;i<3 ;i++) {
//    allImages[i].src = img[i]
// }

allImages.forEach((image,i)=>{
    image.src = img[i]
})

// for each applies on node list and array, so it can be appliead easily in queryselectAll, however in .img, we have to convert it into array using [...]
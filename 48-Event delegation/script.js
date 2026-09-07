const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

container.addEventListener('click', (e)=>{
if(e.target !== container  && e.target !== addCardBtn   ){
    e.target.remove()
}else if(e.target ==container){
    console.log("card mein click krr container mein nahi !!");
}else if(e.target == addCardBtn){
    console.log("isse sirf add hoga ye button kahi gyb ni hoga");
}
})
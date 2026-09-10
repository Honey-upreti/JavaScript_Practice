const checkbox = document.querySelectorAll('.custom-checkbox')
// const goalContainer = document.querySelectorAll('.goal-container')
const inputfield = document.querySelectorAll('#goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')


checkbox.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allgoalsadded = [...inputfield].every(function (input) {
            // console.log(input.value);
            return input.value
        })
        if (allgoalsadded) {
            checkbox.parentElement.classList.toggle('completed');
            progressValue.style.width = '33%'
            progressValue
        } else{
            progressBar.classList.add('show-error')
        }
    })
})

inputfield.forEach((input)=>{
    input.addEventListener('focus',()=>{
        progressBar.classList.remove('show-error')
    })
})
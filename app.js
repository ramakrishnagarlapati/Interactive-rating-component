const ratingContainer = document.querySelector('.card-container')
const thankyouContainer = document.querySelector('.thank-you');
const ratingButtons = document.querySelectorAll('.rating');
const ratingValue = document.querySelector('.rating-value')
const submitBtn = document.querySelector('.submit-btn')
const rateAgainBtn = document.querySelector('.rate-again')

ratingButtons.forEach(ratingButton => {
    ratingButton.addEventListener('click', () => {
        ratingValue.textContent = ratingButton.textContent
    })
})

submitBtn.addEventListener('click', () => {
    ratingContainer.style.display = 'none'
    thankyouContainer.classList.remove('hidden')
})
rateAgainBtn.addEventListener('click', () => {
    ratingContainer.style.display = 'block'
    thankyouContainer.classList.add('hidden')
})



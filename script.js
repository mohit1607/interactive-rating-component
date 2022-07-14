
const allRating = document.querySelectorAll('.rating')
let selected = undefined;
const resetAll = () => {
    allRating.forEach((curr) => {
        curr.classList = "rating"
    })
}
allRating.forEach((current,index) => {
    current.addEventListener('click', () => {
        resetAll()
        selected = index + 1
        current.classList = "selected"
    })
})

const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', () => {
    let selectedItem = document.querySelector('.chip')
    if(selected !== undefined){
        selectedItem.textContent = `You selected ${selected} out of 5`
        document.querySelector('.container2').style.display = 'flex'
        document.querySelector('.container').style.display = 'none'
    }
    else{
        alert('select the rating first.')
    }
})

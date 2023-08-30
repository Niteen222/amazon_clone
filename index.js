const industry = document.querySelector('.industry')
const score = document.querySelector('.score')
industry.addEventListener("change", function(event){
    let value = event.target.value
    if (value === 'Growing Industry'){
        score.textContent = 10
    }
    else if (value === 'Growth industry'){
        score.textContent = 20
    }
    else if (value === 'type industry')
    score.textContent = 30
})

const nindustry = document.querySelector('.nindustry')
const nscore = document.querySelector('.nscore')
nindustry.addEventListener("change", function(event){
    let value = event.target.value
    if (value === 'stable Industrys'){
        nscore.textContent = 1
    }
    else if (value === 'Growings industry'){
        nscore.textContent = 2
    }
    else if (value === 'types industry')
    nscore.textContent = 3
})
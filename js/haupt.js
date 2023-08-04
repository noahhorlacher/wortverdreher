import verdrehe from "./wortverdreher.js"

const verdrehKnopf = document.querySelector('button')
const austuh = document.querySelector('p')
const eintuh = document.querySelector('textarea')

function verdrehsMirDuSau(){
    austuh.innerText = verdrehe(eintuh.value)
}

verdrehKnopf.addEventListener('click', verdrehsMirDuSau)

verdrehsMirDuSau()
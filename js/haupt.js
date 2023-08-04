import { verdreheSatz } from "./wortverdreher.js"

const verdrehKnopf = document.querySelector('button')
const austuh = document.querySelector('p')
const eintuh = document.querySelector('textarea')

verdrehKnopf.addEventListener('click', ()=>austuh.innerText = verdreheSatz(eintuh.value))
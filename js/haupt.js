import { verdreheSatz } from "./wortverdreher.js"

const verdrehKnopf = document.querySelector('button')
const automatischÜberprüfKasten = document.querySelector('#automatischÜberprüfKasten')
const austuh = document.querySelector('p')
const eintuh = document.querySelector('textarea')

let automatischesVerdrehen = automatischÜberprüfKasten.checked = true
automatischVerdrehenUmschalten()

function austuhAktualisieren(){
    austuh.innerText = verdreheSatz(eintuh.value)
}
verdrehKnopf.addEventListener('click', austuhAktualisieren)

automatischÜberprüfKasten.addEventListener('change', e => {
    automatischesVerdrehen = automatischÜberprüfKasten.checked
    automatischVerdrehenUmschalten()
})

function automatischVerdrehenUmschalten(){
    if(automatischesVerdrehen){
        eintuh.addEventListener('input', austuhAktualisieren)

        austuhAktualisieren()
    } else {
        eintuh.removeEventListener('input', austuhAktualisieren)
    }
}
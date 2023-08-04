import { verdreheSatz } from "./wortverdreher.js"

const eintuh = document.querySelector('textarea')
const austuh = document.querySelector('p')

const verdrehKnopf = document.querySelector('button')
const automatischÜberprüfKasten = document.querySelector('#automatischÜberprüfKasten')

let automatischesVerdrehen = automatischÜberprüfKasten.checked = true

const schieber = document.querySelector('#zufälligkeitsSchieber')
const schieberWertBenennung = document.querySelector('#schieberWertBenennung')

let zufälligkeitsWert = schieber.value = schieberWertBenennung.innerText = 1.0

schieber.addEventListener('input', zufälligkeitsWertAktualisieren)
eintuh.addEventListener('input', austuhAktualisieren)

function zufälligkeitsWertAktualisieren(){
    zufälligkeitsWert = schieberWertBenennung.innerText = parseFloat(schieber.value).toFixed(2)
    austuhAktualisieren()
}

function austuhAktualisieren(){
    austuh.innerText = verdreheSatz(eintuh.value, zufälligkeitsWert)
}
verdrehKnopf.addEventListener('click', austuhAktualisieren)

automatischÜberprüfKasten.addEventListener('change', e => {
    automatischesVerdrehen = automatischÜberprüfKasten.checked
    automatischVerdrehenUmschalten()
})

function automatischVerdrehenUmschalten(){
    if(automatischesVerdrehen){
        schieber.addEventListener('input', zufälligkeitsWertAktualisieren)
        eintuh.addEventListener('input', austuhAktualisieren)

        zufälligkeitsWertAktualisieren()
    } else {
        schieber.removeEventListener('input', zufälligkeitsWertAktualisieren)
        eintuh.removeEventListener('input', austuhAktualisieren)
    }
}
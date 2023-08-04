import verdrehe from "./wortverdreher.js"
import { testsAusführen } from './testRahmenwerk.js'

const tests = [ testeGrossschreibung, testeVertauschung ]

function testeVertauschung(){
    const gegeben = 'Affen'
    const rückgabe = verdrehe(gegeben)
    const erwartet = 'Effan'

    const resultat = rückgabe === erwartet

    return { gegeben, rückgabe, erwartet, resultat }
}

function testeGrossschreibung(){
    const gegeben = 'Abend'
    const rückgabe = verdrehe(gegeben)
    const erwartet = 'Erster Buchstabe gross.'

    const resultat = rückgabe.charAt(0) === rückgabe.charAt(0).toUpperCase()

    return { gegeben, rückgabe, erwartet, resultat }
}

testsAusführen(tests)
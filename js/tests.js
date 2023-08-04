import { verdreheSatz } from "./wortverdreher.js"
import { testsAusführen } from './testRahmenwerk.js'

function testeVertauschung(){
    const gegeben = 'affen'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'effan'

    const ergebnis = rückgabe === erwartet

    return { gegeben, rückgabe, erwartet, ergebnis }
}

function testeSatz(){
    const gegeben = 'affen machen, was affen gerne machen.'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'effan mechan, was effan gerne mechan.'

    const ergebnis = rückgabe === erwartet

    return { gegeben, rückgabe, erwartet, ergebnis }
}

function testeSatzMitNeuerZeile(){
    const gegeben = 'Eine Geschichte:\nNichts ist echt.'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Eine Geschechti:\nNichts ist echt.'

    const ergebnis = rückgabe === erwartet

    return { gegeben, rückgabe, erwartet, ergebnis }
}

function testeGrossschreibung(){
    const gegeben = 'Abend'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Erster Buchstabe gross.'

    const ergebnis = rückgabe.charAt(0) === rückgabe.charAt(0).toUpperCase()

    return { gegeben, erwartet, rückgabe, ergebnis }
}

function testeFolgenBleibenZusammen(){
    const gegeben = 'Faoegioa'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Fioagaoe'

    const ergebnis = rückgabe === erwartet

    return { gegeben, erwartet, rückgabe, ergebnis }
}

function testeAkzente(){
    const gegeben = 'Féssä'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Fässé'

    const ergebnis = rückgabe === erwartet

    return { gegeben, erwartet, rückgabe, ergebnis }
}

function testeWeissRaumBehaltung(){
    const gegeben = 'Dies\tIst\nein Test\n\n'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Dies\tIst\nein Test\n\n'

    const ergebnis = rückgabe === erwartet

    return { gegeben, erwartet, rückgabe, ergebnis }
}

function testeBindestrichBehaltung(){
    const gegeben = 'Augen-Blicke'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Augen-Blecki'

    const ergebnis = rückgabe === erwartet

    return { gegeben, erwartet, rückgabe, ergebnis }
}

function testeIeBleibt(){
    const gegeben = 'Wiesenziege'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Wiesenziege'

    const ergebnis = rückgabe === erwartet

    return { gegeben, erwartet, rückgabe, ergebnis }
}

function testeEiBleibt(){
    const gegeben = 'Eigentum'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Eiguntem'

    const ergebnis = rückgabe === erwartet

    return { gegeben, erwartet, rückgabe, ergebnis }
}

function testeDoppelEi(){
    const gegeben = 'Einerlei'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Einerlei'

    const ergebnis = rückgabe === erwartet

    return { gegeben, erwartet, rückgabe, ergebnis }
}

function testeQu(){
    const gegeben = 'Qudefqwa'
    const rückgabe = verdreheSatz(gegeben)
    const erwartet = 'Qudafqwe'

    const ergebnis = rückgabe === erwartet

    return { gegeben, erwartet, rückgabe, ergebnis }
}

testsAusführen([
    testeVertauschung,
    testeSatz,
    testeSatzMitNeuerZeile,
    testeGrossschreibung,
    testeFolgenBleibenZusammen,
    testeAkzente,
    testeWeissRaumBehaltung,
    testeIeBleibt,
    testeEiBleibt,
    testeDoppelEi,
    testeQu,
    testeBindestrichBehaltung
])
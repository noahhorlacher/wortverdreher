function testsAusführen(tests){
    console.info(`${tests.length} Test${tests.length === 1 ? ' wird' : 's werden'} ausgeführt.`)

    tests.forEach((test, index) => testeFunktion(test, index+1, tests.length))
}

function testeFunktion(testFunktion, testNummer, testAnzahl){
    const { gegeben, rückgabe, erwartet, resultat } = testFunktion()

    const testName = testFunktion.name

    const ersteFarbe = resultat === true ? '#0f0' : '#f00'
    console.info(
        `%c(${testNummer}/${testAnzahl}) Test "${testName}" ${resultat === true ? 'erfolgreich' : 'fehlgeschlagen'}.`,
        `color: ${ersteFarbe}; padding: 12px; font-weight: bold; border-bottom: 1px solid ${ersteFarbe}; margin-bottom: 24px;`,
        {erwartet}, {rückgabe}, {gegeben}
        )
//     console.info(`%c(${testNummer}/${testAnzahl}) Test "${testName}" ${resultat === true ? 'erfolgreich' : 'fehlgeschlagen'}.%cGegeben: ${gegeben}
// Rückgabe: ${rückgabe}
// Erwartet: ${erwartet}`,
//         `color: ${ersteFarbe}; padding: 12px; font-weight: bold; border-bottom: 1px solid ${ersteFarbe}; margin-bottom: 24px;`, 'color: white; padding: 0px 12px;')
}

export {
    testeFunktion,
    testsAusführen
}
function testsAusführen(tests){
    console.info(`%c🏁 ${tests.length} Test${tests.length === 1 ? ' wird' : 's werden'} ausgeführt.`,
    'font-weight: 900; font-size: 24px; color: #aaf; padding: 24px 0;')

    let erfolgreicheTests = []
    let fehlgeschlageneTests = []

    tests.forEach((test, index) => {
        try {
            let erfolgreich = testeFunktion(test, index+1, tests.length)
            if(erfolgreich) erfolgreicheTests.push(test.name)
            else fehlgeschlageneTests.push(test.name)
        } catch(fehler){
            console.info(
                `%c🚷 (${index+1}/${tests.length}) Test "${test.name}" durch Ausführungsfehler fehlgeschlagen:`,
                `color: #f00; padding: 12px; font-weight: bold; border-bottom: 1px solid #f00; margin-bottom: 24px;`,
                fehler
                )
            
            fehlgeschlageneTests.push(test.name)
        }
    })
    
    if(fehlgeschlageneTests.length > 0){
        console.info(
            `%c❌ ${fehlgeschlageneTests.length}/${tests.length} Test${tests.length === 1 ? '' : 's'} ${fehlgeschlageneTests.length > 1 ? 'schlugen' : 'schlug'} fehl:`,
            'font-size: 24px; color: #f00; padding: 24px 0;'
        )
        
        for(let fehlgeschlagenerTest of fehlgeschlageneTests)
            console.info(`%c\t- ${fehlgeschlagenerTest}`, 'color: #f00')
    } else {
        console.info('%c🎉 Alle Tests waren erfolgreich', 'font-size: 24px; color: #0f0; padding: 24px 0;')
    }
}

function testeFunktion(testFunktion, testNummer, testAnzahl, logEverything = false){
    const { gegeben, erwartet, rückgabe, ergebnis } = testFunktion()

    const testName = testFunktion.name

    const ersteFarbe = ergebnis === true ? '#0f0' : '#f00'
    
    if(logEverything || !ergebnis){
        console.info(
            `%c${ergebnis === true ? '✅' : '❌'} (${testNummer}/${testAnzahl}) Test "${testName}" ${ergebnis === true ? 'erfolgreich' : 'fehlgeschlagen'}.`,
            `color: ${ersteFarbe}; padding: 12px; font-weight: bold; border-bottom: 1px solid ${ersteFarbe}; margin-bottom: 24px;`,
            {gegeben}, {erwartet}, {rückgabe}
            )
    }

    return ergebnis
}

export {
    testeFunktion,
    testsAusführen
}
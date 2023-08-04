// Verdrehe Vokale im gegebenen Faden auf eine deterministische Weise.
// Gross-/Kleinschreibung wird beibehalten.
function verdrehe(faden) {
    return faden.replace(/\b\w+\b/g, wort => {
        // Erstelle ein Array von umgekehrten Vokalen im Wort
        const vokale = Array.from(wort)
            .filter(buchstabe => 'aeiou'.includes(buchstabe.toLowerCase()))
            .reverse();

        // Ersetze Vokale im Wort durch umgekehrte Vokale
        const umgedrehtesWort = Array.from(wort)
            .map(buchstabe => 'aeiou'.includes(buchstabe.toLowerCase()) ? vokale.shift() : buchstabe)
            .join('');

        // Stelle sicher, dass die Groß-/Kleinschreibung des ersten Buchstabens beibehalten wird
        return wort[0] === wort[0].toUpperCase() 
            ? umgedrehtesWort.charAt(0).toUpperCase() + umgedrehtesWort.slice(1).toLowerCase() 
            : umgedrehtesWort;
    })
}

export default verdrehe

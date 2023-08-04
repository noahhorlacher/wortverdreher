// Liste der Vokale, einschließlich Akzente und Umlaute, in Groß- und Kleinschreibung
const VOKALE = 'aeiouäöüéèêëïîôöùûüAEIOUÄÖÜÉÈÊËÏÎÔÖÙÛÜæøåÆØÅğĞıİöÖüÜşŞçÇűáéíóöőúüŰÁÉÍÓÖŐÚÜ'

// Verdrehe Mehrlaute im gegebenen Wort auf eine deterministische Weise.
// Gross-/Kleinschreibung wird beibehalten.
function verdreheWort(wort) {
    // Extrahiere und umkehre die Mehrlaute im Wort
    const umgekehrteMehrlaute = extrahiereUndKehreMehrlaute(wort)

    // Ersetze die Mehrlaute im Wort durch die umgekehrten Mehrlaute
    const umgedrehtesWort = ersetzeMehrlauteMitUmgekehrten(wort, umgekehrteMehrlaute)

    return umgedrehtesWort
}

// Extrahiere die Mehrlaute im Wort und kehre sie um
function extrahiereUndKehreMehrlaute(wort) {
    const mehrlaute = wort.match(new RegExp(`[${VOKALE}]+`, 'g')) || []
    return mehrlaute.reverse()
}

// Ersetze die Mehrlaute im Wort durch die umgekehrten Mehrlaute
function ersetzeMehrlauteMitUmgekehrten(wort, umgekehrteMehrlaute) {
    return wort.replace(new RegExp(`[${VOKALE}]+`, 'g'), match => {
        const umgekehrterMehrLaut = umgekehrteMehrlaute.shift()
        // Beibehalten der Groß-/Kleinschreibung des ersten Buchstabens
        return match[0] === match[0].toUpperCase()
            ? umgekehrterMehrLaut.charAt(0).toUpperCase() + umgekehrterMehrLaut.slice(1).toLowerCase()
            : umgekehrterMehrLaut.toLowerCase()
    })
}

// Verdrehe Mehrlaute in jedem Wort eines gegebenen Fadens auf eine deterministische Weise.
// Gross-/Kleinschreibung wird beibehalten.
function verdreheSatz(faden) {
    // Teile den Faden in separate Worte und Trennzeichen
    const elemente = faden.split(/(\s+)/)

    // Verdrehe die Mehrlaute in jedem Wort
    const verdrehteElemente = elemente.map(element => /\s+/.test(element) ? element : verdreheWort(element))

    // Füge die verdrehten Worte und Trennzeichen wieder zum Faden zusammen
    const verdrehterSatz = verdrehteElemente.join('')

    return verdrehterSatz
}

export { verdreheSatz, verdreheWort }

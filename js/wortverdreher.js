// Liste der Vokale, einschließlich Akzente und Umlaute, in Kleinschreibung
const VOKALE = 'aeiouäöüéèêëïîôöùûüæøåğıöüşçűáéíóöőúü';

// Liste der spezifischen Vokalmuster, die ignoriert werden sollen, in Kleinschreibung
const IGNORIEREN = ['ie', 'ei', 'qu', 'eu', 'au', 'ai'];

// Liste der Worttrennzeichen
const WORT_TRENNZEICHEN = /\s+|-/;

// Erstelle einen regulären Ausdruck, der die Vokalmuster, die ignoriert werden sollen, ausschließt
const REGEX_VOKALE = new RegExp(`(${IGNORIEREN.join('|')})|([${VOKALE}]+)`, 'gi');

// Funktion zum Extrahieren der Vokalgruppen aus einem Wort
function extrahiereVokalgruppen(wort) {
    return wort.match(REGEX_VOKALE) || [];
}

// Funktion zum Verschieben der Vokalgruppen in einem Wort
function verschiebeVokalgruppen(vokalgruppen, zufälligkeit) {
    const verschiebungsIndex = Math.floor(vokalgruppen.length * zufälligkeit) % vokalgruppen.length;
    return [...vokalgruppen.slice(verschiebungsIndex), ...vokalgruppen.slice(0, verschiebungsIndex)];
}

// Funktion zum Ersetzen der Vokalgruppen in einem Wort durch die verschobenen Vokalgruppen
function ersetzeVokalgruppen(wort, verschobeneVokalgruppen) {
    let i = 0;
    return wort.replace(REGEX_VOKALE, match => {
        if (IGNORIEREN.includes(match.toLowerCase())) {
            return match; // Beibehalten der Groß-/Kleinschreibung des gesamten MehrLauts
        } else {
            const verschobeneVokalgruppe = verschobeneVokalgruppen[i++];
            // Beibehalten der Groß-/Kleinschreibung des ersten Buchstabens
            return match[0] === match[0].toUpperCase()
                ? verschobeneVokalgruppe.charAt(0).toUpperCase() + verschobeneVokalgruppe.slice(1).toLowerCase()
                : verschobeneVokalgruppe.toLowerCase();
        }
    });
}

// Funktion zum Verzerren der Vokalgruppen in einem Wort
function verdreheWort(wort, zufälligkeit = .99) {
    if(zufälligkeit >= 1) zufälligkeit = .99

    const vokalgruppen = extrahiereVokalgruppen(wort).filter(vg => !IGNORIEREN.includes(vg.toLowerCase()));
    const verschobeneVokalgruppen = verschiebeVokalgruppen(vokalgruppen, zufälligkeit);
    return ersetzeVokalgruppen(wort, verschobeneVokalgruppen);
}

// Funktion zum Verzerren der Vokalgruppen in jedem Wort eines gegebenen Satzes auf eine deterministische Weise.
// Gross-/Kleinschreibung wird beibehalten.
function verdreheSatz(satz, zufälligkeit = .99) {
    if(zufälligkeit >= 1) zufälligkeit = .99

    // Teile den Satz in separate Worte und Trennzeichen
    const elemente = satz.split(new RegExp(`(${WORT_TRENNZEICHEN.source})`));

    // Verdrehe die Vokalgruppen in jedem Wort
    const verdrehteElemente = elemente.map(element => WORT_TRENNZEICHEN.test(element) ? element : verdreheWort(element, zufälligkeit));

    // Füge die verdrehten Worte und Trennzeichen wieder zum Satz zusammen
    return verdrehteElemente.join('');
}

export { verdreheSatz, verdreheWort };

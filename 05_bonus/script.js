/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/



// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

function greetings(name) {

    const now = new date()

    const hour = now.getHours()
    let message = ""

    if (hour < 13) {
        message = "buongiorno"
    }
    else if (hour >= 13 && hour < 17) {
        message = "buon pomeriggio"
    }
    else {
        message = "buona sera"
    }

    return `${message} ${message}`
}


const firstName = 'Mario';


console.log(greetings(firstName))

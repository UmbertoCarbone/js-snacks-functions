/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

// Dichiara la funzione qui.
// Invoca la funzione qui e stampa il risultato in console
//Risultato atteso se si passa 'javascript': 3 (a, a, i)




const word = 'javascript';

console.log(estraiVocali(word));

function estraiVocali(vocal) {

    const vocali = 'a,i';
    let trovate = [];

    for (let i = 0; i < vocal.length; i++) {
        if (vocali.includes(vocal[i])) {
            trovate.push(vocal[i]);
        }
    }
    return trovate
}




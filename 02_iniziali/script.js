/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Invoca la funzione qui e stampa il risultato in console
console.log(first_word(names))


// Dichiara la funzione qui.
function first_word(array_names) {
    const lettere = []

    for (let i = 0; i < array_names.length; i++) {

        lettere.push(array_names[i][0]);
        // console.log(lettera)

    }
    return lettere;
}


/* function iniziali(namesArray) {
    const initials = [];

    for (let i = 0; i < namesArray.length; i++) {
        const name = namesArray[i];
        initials.push(name.charAt(0));
    }

    return initials;
}


const initials = iniziali(names);

console.log(initials);  */
/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console
//1 Ciclo for della lunghezza dell'array
//2 condizione IF per verificare se il nome inizia con "A"
//3 se si, aggiungiamo ad un array vuoto quel nome
//4 trasformiamo tutto in funzione




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// const arrayvuoto = [];

/* for (let i = 0; i < names.length; i++) {
    /*  console.log(names[i])
     console.log(names[i][0]) 

    if (names[i][0] === firstLetter) {
        // console.log("c'e un nome con la " + firstLetter) 
        arrayvuoto.push(names[i])
    }
}
console.log(arrayvuoto) */


function wordWithA(names, firstLetter) {
    const arrayvuoto = [];

    for (let i = 0; i < names.length; i++) {
        /*  console.log(names[i])
         console.log(names[i][0]) */

        if (names[i][0] === firstLetter) {
            // console.log("c'e un nome con la " + firstLetter) 
            arrayvuoto.push(names[i])
        }
    }
    return arrayvuoto
}

console.log(wordWithA(names, 'A'))

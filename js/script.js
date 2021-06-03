// JSnack5

//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
// Per chi vuole possiamo fare che finchè l'utente non inserisce il numero, il programma non va avanti.

// PRIMO METODO

//Inserisci un numero
// var numero = parseInt(prompt('inserisci un numero'));

// //se è pari stampa il numero
// if(numero % 2 == 0){
//     console.log(numero);
// }else{
//     console.log(numero + 1);
// }



// SECONDO METODO

//finchè l'utente non inserisce il numero, il programma non va avanti.

// var numero;

// while(isNaN(numero) || numero <= 0){
//     numero = parseInt(prompt('Inserisci un numero'))
// }

// if(numero % 2 == 0){
//     console.log(numero);
// }else{
//     console.log(numero + 1);
// }





//JSnack6

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
// p.s potete scegliere se farne 4/5 oppure generarli all'infinito fino a quando non vi stufate.

// var nomi = ['Danilo', 'Davide', 'Nicola', 'Michele', 'Paolo', 'Emanuele', 'Armand', 'Beatrice', 'Maria', 'Emma', 'Ginevra'];

// var cognomi = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Gallo', 'Costa', 'Fontana'];

// var nominativoLista = [];

// for(var i = 0; i < nomi.length; i++){
//     var random = nomi[Math.floor(Math.random() * nomi.length)] + ' ' + cognomi[Math.floor(Math.random() * cognomi.length)];
    
//     nominativoLista.push(random);

// }

// console.log(nominativoLista);




// JSnack7

// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz". :collisione:
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// 1 - STAMPARE I NUMERI DA 1 A 100

for(var i = 1; i <= 100; i++){

    //se sono sia multipli di 5 che di 3 scriviamo FizzBuzz
    if(i % 3 == 0 & i % 5 == 0){
        console.log(i + ' ' + 'FizzBuzz');
    }

    // se sono multipli di 3 scriviamo Fizz
    else if(i % 3 == 0){
        console.log(i + ' ' + 'Fizz');
    }

    //se sono multipli di 5 scriviamo Buzz
    else if(i % 5 == 0){
        console.log(i + ' ' + 'Buzz');
    }

    //altrimenti scriviamo solo il numero
    else{
        console.log(i);
    }
}
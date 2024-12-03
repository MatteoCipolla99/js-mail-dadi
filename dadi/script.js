//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?


//Genero un numero casuale da 1 a 6 per il giocatore.
const scorePlayer = Math.floor(Math.random() * 6) + 1;

//Genero un numero casuale da 1 a 6 per il computer.
const scoreCpu = Math.floor(Math.random() * 6) + 1;

//Mostro i punteggi 
console.log(`Player : ${scorePlayer}`);
console.log(`Cpu : ${scoreCpu}`);

//Stabilisco il vincitore 
if ( scorePlayer > scoreCpu){
    console.log("The winner is Player");
}else if ( scorePlayer < scoreCpu){
    console.log("The winner is Cpu");
}else {
    console.log("the winner is nobody")
}    

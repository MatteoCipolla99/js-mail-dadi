//Mail
//Chiedi all’utente la sua email,controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
//Non è necessario provvedere alla validazione delle email.//

//1.Lista delle mail
const listEmail = ["franco5678@email.com", "mimmo1234@email.com", "patti9876@email.com", "carlo1233@email.com"];

//2.Chiediamo all'utente la sua email.
const userEmail = prompt("Inserisci la tua email.");

//Verificare se l'utente può accedere.
let emailFound = false;

//Controllo se l'email è nella lista.
for (let i = 0; i < listEmail.length; i++) {
    if (listEmail[i] === userEmail) {
        emailFound = true;
    }
}
//Messaggio sull'esito del controllo.
if (emailFound) {
    console.log("Accesso consentito. Benvenuto!");
} else {
    console.log("Accesso negato. L'email non è autorizzata.");
}


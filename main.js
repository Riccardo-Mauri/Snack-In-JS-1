const users = [
    { name: 'John', role: 'Developer' },
    { name: 'Jane', role: 'Manager' },
    { name: 'Jim', role: 'Designer' },
    { name: 'Mark', role: 'Developer' }
];


//inizio creando un array vuoto dove memorizzerò poi i nomi degli sviluppatori (Developer)

const devs = [];

//ora eseguo un ciclo for dell'array 'users' per filtrare gli sviluppatori (Developer)
for (let i = 0; i < users.length; i++) {
    //quindi SE l'utente ha il ruolo di 'Developer' aggiungo il suo nome all'array di devs
    if (users[i].role === 'Developer') {
        devs.push(users[i].name)
    }
}
//stampo quindi il risultato in console 
console.log('I Developer sono:',devs);
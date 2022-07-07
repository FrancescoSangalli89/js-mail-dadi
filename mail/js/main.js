
const list = ['francesco@gmail.com', 'luigi@gmail.com', 'sara@gmail.com', 'jessica@gmail.com'];

const eMail = prompt('inserisci la tua eMail');

let verify = 'no';

for (let i = 0; i < list.length; i++) {

        if (list[i]  == eMail) {
            verify = 'ok';
        }
    
}

if (verify == 'ok') {
    alert('benvenuto/a!');
} else {
    alert('la mail inserita non è in elenco');
}
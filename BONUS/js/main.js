
const send = document.getElementById('send');

send.addEventListener('click', 
    function() {

        const list = ['francesco@gmail.com', 'luigi@gmail.com', 'sara@gmail.com', 'jessica@gmail.com'];

        const eMail = document.getElementById('eMail').value;

        let verify = 'no';

        for (let i = 0; i < list.length; i++) {

            if (list[i]  == eMail) {
                verify = 'ok';
            }
        }

        const verifyResult = document.getElementById('verifyResult');
    
        if (verify == 'ok') {
            verifyResult.innerHTML = 'benvenuto/a!';
        } else {
            verifyResult.innerHTML = 'la mail inserita non è in elenco';
        }
    }
)







const list = ['francesco@gmail.com', 'luigi@gmail.com', 'sara@gmail.com', 'jessica@gmail.com'];

const send = document.getElementById('send');

send.addEventListener('click', 
    function() {

        const eMail = document.getElementById('eMail').value;

        let verify = false;

        for (let i = 0; i < list.length; i++) {

            if (list[i]  == eMail) {
                verify = true;
            }
        }

        const verifyResult = document.getElementById('verifyResult');
    
        if (verify == true) {
            verifyResult.innerHTML = 'benvenuto/a!';
        } else {
            verifyResult.innerHTML = 'la mail inserita non è in elenco';
        }
    }
)






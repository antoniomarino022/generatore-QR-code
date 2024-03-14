const btnQR = document.getElementById('btn');
const imgBox = document.getElementById('img');


async function generaQr() {
    try {
        const btnInput = document.getElementById('input').value;
        const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

        // se l'input non è vuoto 
        if (btnInput !== "") {
             // se l'input non è vuoto, si prende il valore dell'input e si codifica usando la funzione "encodeURIComponent"
            //  concatenandosi con la variabile api , il risultato verrò assegnato all'attributo src dell'img
            imgBox.src = api + encodeURIComponent(btnInput);
        }
    } catch (error) {
        alert('Non disponibile');
    }
}

btnQR.addEventListener('click', function() {
    generaQr();
});

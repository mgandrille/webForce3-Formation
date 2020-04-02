const message = document.getElementById('verification')

function verif() {
    const monPrix = document.getElementById('monPrix').value;

    if (monPrix < 5) {
        message.innerText = 'On avait dit au minimum 5€ :)';
    } else if (monPrix >= 5 && monPrix <= 10) {
        message.innerText = 'Merci et bonne lecture!';
    } else {
        message.innerText = 'Waow! Merci pour ta générosité!';
    }
}

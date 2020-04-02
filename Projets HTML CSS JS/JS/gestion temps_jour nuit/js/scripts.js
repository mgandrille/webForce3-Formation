const today = new Date();
const heures = today.getHours();

console.log(heures);

function afficheImage () {
    if(heures > 7 && heures < 20) {
        document.getElementById('jour').style.display = 'block';
    } else {
        document.getElementById('nuit').style.display = 'block';
    }
}

afficheImage();

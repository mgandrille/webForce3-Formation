const today = new Date();
const jour = today.getDate();
const mois = today.getMonth()+1;
const annee = today.getFullYear();

const para = document.getElementsByTagName('p')[0];

function afficheDate () {
    let petitmois;
    if (mois < 10) {
        petitmois = `0${mois}`;
    } else {
        petitmois = mois;
    }

    return `${jour}/${petitmois}/${annee}`;

}

console.log(afficheDate());
para.innerText = afficheDate();
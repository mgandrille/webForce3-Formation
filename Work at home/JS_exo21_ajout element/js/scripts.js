const titre = document.getElementsByTagName('h1')[0];
const lien = document.getElementsByTagName('a');

titre.id = 'coral';
console.log(titre);


// lien[0].className = 'principal';
// lien[0].href = 'http://www.wf3.fr';
// console.log(lien[0]);

// lien[1].className = 'principal';
// lien[1].href = 'http://www.wf3.fr';

console.log(lien);
for (let i in lien) {
    // console.log(lien[i]);
    lien[i].className = 'principal';
    lien[i].href = 'http://www.wf3.fr';
}

titre.innerHTML = titre.innerText + '<span>de la page</span>';
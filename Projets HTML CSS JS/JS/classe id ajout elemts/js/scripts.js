const titre = document.getElementsByTagName('h1');

titre.id = 'coral';
console.log(titre);

titre.innerHTML = '<span>de la page</span>';

const liens = document.querySelectorAll('a');

liens.className = 'principal';
// liens.href = 'http://www.wf3.fr';

console.log(liens.className);
console.log(liens.classList);


/* CORRECTION

const liens = [...document.getElementsByTagName('a')];
const span = document.createElement('span');
const titre = document.getElementsByTagName('h1')[0];

titre.id = 'coral';

for(let i of liens){
    i.className = 'principal';
    i.href = 'http://www.wf3.fr';
}

span.innerText = 'de la page';
titre.appendChild(span);

*/
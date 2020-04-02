const formulaire = document.getElementsByTagName('form')[0];
const input = document.getElementsByTagName('input');

console.log(formulaire);
console.log(input);

formulaire.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);

    for(let i in input) {
        console.log(input[i]);
        if(input[i].length < 3 ) {
            alert(`Il manque des caractères !`);
            input[3].removeEventListener('submit', e => {})
        }
    };
});


/* CORRECTION 

const inputs = [...document.getElementsByClassName('check')];

document.querySelector('form').addEventListener('submit', e => {
    j = 0;
    for(let i of inputs){
        if(i.value.length < 4) j ++;
    }
    
    if(j > 0) {
        e.preventDefault();
        alert(`Vous avez oublié de remplir ${j} champs`);
    }
});

*/



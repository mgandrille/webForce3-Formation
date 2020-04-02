const rond = document.getElementsByTagName('div')[0];

document.addEventListener('keydown', clavier);
document.addEventListener('keyup', clavierSans);


function clavier(e) {
    if (e.which == 83) {
        rond.style.borderRadius = '0';
    };
}

function clavierSans(e) {
    if (e.which == 83) {
        rond.style.borderRadius = '50%';
    };
}


/* CORRECTION 

const carre = document.getElementsByTagName('div')[0];

document.addEventListener('keydown', e => {
    if(e.which == 83) carre.style.borderRadius = '50%';
});

document.addEventListener('keyup', e => {
    if(e.which == 83) carre.style.borderRadius = '0%';
});

*/

/* pour faire bouger le rond, il suffit d'ajouter de la transition 
qd on appuie sur les touches dte, che, haut, bas) */

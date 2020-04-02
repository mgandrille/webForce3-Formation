const txt = document.getElementById('text');

// récup texte ds console
console.log(txt.innerText);

// nb caractères
console.log(txt.innerText.length);

// récup la 1ere lettre
// console.log(txt.innerText[0]);


// modif paragraphe
txt.innerText = 'Nouveau texte';


          
// mettre en gras le mot 'texte'
txt.innerHTML = 'Nouveau <b>texte</b>';

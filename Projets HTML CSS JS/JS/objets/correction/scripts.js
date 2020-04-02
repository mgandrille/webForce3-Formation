const planetes = ['Terre', 'Mars', 'Jupiter'];
const terre = {couleur:'Bleue', forme:'Ronde'}; 
const general = {sat: ['moon', 'sat2', 'sat3'], taille: ['grande', 'moyenne', 'petite']};
const details = [{nom: 'Terre', couleur: 'bleue'}, {nom: 'Mars', couleur: 'rouge'}];

/* Jupiter */

console.log(planetes[2]);
console.log(planetes[planetes.length - 1]);

/* Ronde */

console.log(terre.forme)

/* moonmoyenne */

console.log(general.sat[0] + general.taille[1]);

/* blueuerouge */

console.log(details[0].couleur + details[1].couleur);

/* super manipulations */

const supertableau =  [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
];

console.log(supertableau[2][1]);


const superobjet = {
    etudiant1 : {prenom: 'Pierre', nom: 'Jean'},
    etudiant2 : {prenom: 'Jean', nom: 'Pierre'},
};

console.log(superobjet.etudiant2.nom);


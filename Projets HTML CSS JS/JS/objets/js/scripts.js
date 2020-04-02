const planetes = ['Terre', 'Mars', 'Jupiter'];
const terre = {couleur:'Bleue', forme:'Ronde'}; 
const general = {sat: ['moon', 'sat2', 'sat3'], taille: ['grande', 'moyenne', 'petite']};
const details = [{nom: 'Terre', couleur: 'bleue'}, {nom: 'Mars', couleur: 'rouge'}];

/* Jupiter */
console.log(planetes[2]);
console.log(planetes[planetes.length - 1]);

/* Ronde */
console.log(terre.forme);

/* moonmoyenne */
console.log(general.sat[0] + general.taille[1]);

/*bleuerouge */
console.log(details[0].couleur + details[1].couleur);
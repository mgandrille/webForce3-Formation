const paris = [
	{
	equipe1 : 'A',
	equipe2 : 'B',
	gagnant : 'A' 
	},
	{
	equipe1 : 'C',
	equipe2 : 'D',
	gagnant : 'D' 
	},
	{
	equipe1 : 'E',
	equipe2 : 'F',
	gagnant : 'E' 
	},
	{
	equipe1 : 'G',
	equipe2 : 'H',
	gagnant : 'G' 
	},
	{
	equipe1 : 'I',
	equipe2 : 'J',
	gagnant : 'I' 
	},
	{
	equipe1 : 'K',
	equipe2 : 'L',
	gagnant : 'K' 
	},
	{
	equipe1 : 'M',
	equipe2 : 'N',
	gagnant : 'N' 
	},
	{
	equipe1 : 'O',
	equipe2 : 'P',
	gagnant : 'P' 
	},
	{
	equipe1 : 'Q',
	equipe2 : 'R',
	gagnant : 'Q' 
      },
      {
      equipe1 : 'S',
      equipe2 : 'T',
      gagnant : 'T' 
      },

];

/* À partir du tableau de paris, 
utiliser ‘each’ pour afficher les informations de
chaque match correspondant à un élément de liste du HTML */

$(document).ready(function() {
	$.each(paris, (i, valeur) => {
		jQuery('h2 span').eq(i).text(i);
		console.log(i);
		jQuery('li p').eq(i).children('span').eq(0).text(valeur.equipe1);
		jQuery('li p').eq(i).children('span').eq(1).text(valeur.equipe2);
		jQuery('li p').eq(i).children('p span').eq(2).text(valeur.gagnant);
		console.log(valeur);
		console.log(valeur.equipe1);
		});


});

/* CORRECTION

$(document).ready(function() {
	$.each(paris, (i, valeur) => {
		const $element = jQuery('li').eq(i)
		$element.find('.index').text(i);
		$element.find('.equipe1').text(e.equipe1);
        $element.find('.equipe2').text(e.equipe2);
        $element.find('.gagnant').text(e.gagnant);
		});
});

*/
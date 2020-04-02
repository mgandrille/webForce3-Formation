const maBoisson = prompt('Quelle est votre boisson préférée ?', 'Café, Thé, Bière, Vin, Cocktail ...');

switch (maBoisson) {
    case 'Café', 'CAFE':
        alert('Rien ne remplace un bon café ...');
        break;
    case 'Thé':
        alert('Un thé bien chaud à l’anglaise ...');
        break;
    case 'Bière':
        alert(' Très bon choix, mais il faut des toilettes pas loin ...');
        break;
    case 'Vin':
        alert('Blanc sur Rouge, rien ne bouge ; Rouge sur Blanc tout fout le camp ...');
        break;
    case 'Cocktail' :
        alert('C’est assez vaste comme réponse!');
        break;
    default :
        alert('C’est bien aussi ... Mais c’est quoi en fait ?');
}
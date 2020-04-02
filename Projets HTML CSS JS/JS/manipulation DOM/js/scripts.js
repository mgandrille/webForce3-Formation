// remplace image
document.getElementById('image').src = 'img/alcapone.jpg'

// cache image
document.getElementById('cacher').style.display = 'none';

// fond noir text blanc
document.getElementsByTagName('div')[1].style.cssText = 'color : white; background : black;';

// titre souligné
document.querySelector('div h2').style.textDecoration = 'underline';

// remplacement texte 1er paragraphe
document.getElementsByTagName('p')[0].innerText = `De nombreuses inexactitudes ont été rapportées au sujet d'Al Capone dans les journaux, les magazines, les livres et les films. La plus fréquente est que, à l'instar des gangsters de l'époque, il est né en Italie, ce qui est complètement faux. Ce véritable tsar du crime était un produit local, "made in America".`;

// remplacement
const newText = document.getElementsByTagName('p')[0].innerText;

document.getElementsByTagName('p')[1].innerText = newText;
document.getElementsByTagName('p')[2].innerText = newText;
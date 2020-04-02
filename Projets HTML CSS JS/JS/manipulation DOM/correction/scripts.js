document.getElementById('image').src = './img/alcapone.jpg';
document.getElementById('cacher').style.display = 'none';
document.getElementsByTagName('div')[1].style.cssText = 'color: white; background: black;';
document.querySelector('h2').style.textDecoration = 'underline'; 

const text = `De nombreuses inexactitudes ont été rapportées au sujet d'Al Capone dans les journaux, les magazines, les livres et les films. La plus fréquente est que, à l'instar des gangsters de l'époque, il est né en Italie, ce qui est complètement faux. Ce véritable tsar du crime était un produit local, "made in America".`;
const para = document.getElementsByTagName('p');
let text1;
const textActuel = para[0].innerText;

para[0].innerHTML = `${textActuel} ${text}`;   // on ajoute du texte


document.getElementById('image').src = './img/alcapone.jpg';
document.getElementById('cacher').style.display = 'none';
document.getElementsByTagName('div')[1].style.cssText = 'color: white; background: black;';
document.querySelector('h2').style.textDecoration = 'underline';

para[0].innerText = text;


text1 = para[0].innerText;
para[1].innerText = text1;
para[2].innerText = text1;
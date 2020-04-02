const images = [...document.getElementsByTagName('img')];
let j = 0;

for (let i in images) {
    // console.log(i);
    j += 1;
//    console.log(j);
    images[i].src = `https://alguna.fr/cours/${j}.jpg`;
    images[i].style.opacity = j * 0.15;
}




/* correction

const images = [...document.getElementsByTagName('img')];
for(let i in images) {
    j = parseInt(i) + 1;
    console.log(j);
    images[i].src = 'https://alguna.fr/cours/' + j + '.jpg';
}
// for(let i = 0; i < images.length; i++) {
//     j = i + 1;
//     images[i].src = 'https://alguna.fr/cours/' + j + '.jpg';
// }

*/

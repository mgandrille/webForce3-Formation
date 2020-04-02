const element = document.querySelector('div');
const body = document.getElementsByTagName('body')[0];

window.addEventListener('scroll', scrollFenetre);

function scrollFenetre () {
    console.log(window.scrollY);

    if (window.scrollY > 150) {
        element.style.right = '0px';  
    } else {
        element.style.right = '-100px';
    }
}

console.log(window.innerWidth);  /*1072*/


window.addEventListener('resize', () => {
    const taille = window.innerWidth ;
    if(taille < 800) {
        body.style.background = 'blue';
    } 
    if(taille >=800 && taille < 1200) {
        body.style.background = 'red';
    }
    if(taille >= 1200) {
        body.style.background = 'green';
    }
    });



/* CORRECTION SCROLL

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if(window.scrollY > 150){
        document.querySelector('div').style.right = '0px';
    } else {
        document.querySelector('div').style.right = '-100px';
    }
});

*** OU EN TERNAIRE ***

window.addEventListener('scroll', () => {
    document.querySelector('div').style.right = (window.scrollY > 150) ? '0px' : '-100px';
});

*/

/* CORRECTION RESIZE

const body = document.getElementsByTagName('body')[0];
window.addEventListener('scroll', () => {
    document.querySelector('div').style.right = (window.scrollY > 150) ? '0px' : '-100px';
});
window.addEventListener('resize', () => {
    const taille = window.innerWidth;
    if(taille < 800){
        body.style.background = 'blue';
    }else if (taille >= 800 && taille <= 1200 ) {
        body.style.background = 'red';
    } else {
        body.style.background = 'green';
    }
});

*/

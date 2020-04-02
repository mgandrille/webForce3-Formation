const page = document.getElementsByTagName('body')[0];
const popup = document.getElementById('popup');

page.addEventListener('mouseleave', () => {
    popup.style.display = 'block';
} );

// CORRECTION : il faut ajouter la même ligne mais avec mouseenter



/* CORRECTION DE LA PARTIE 2

const body = document.getElementsByTagName('body')[0];
const popup = document.getElementById('popup');

function popupLeave(){
    popup.style.display = 'block';
    body.removeEventListener('mouseleave', popupLeave );
}

body.addEventListener('mouseleave', popupLeave );
body.addEventListener('mouseenter', () => popup.style.display = 'none' );

*/

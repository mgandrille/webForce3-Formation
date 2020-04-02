const bouton = document.getElementsByTagName('button')[0];
const cache = document.getElementById('cache');

bouton.addEventListener('click', apparaitre);

function apparaitre () {
    console.log('apparait');
    cache.style.right = '0px';
    bouton.addEventListener('click', secache);
}

function secache () {
    console.log('disparait');
    cache.style.right = '-200px';
    bouton.removeEventListener('click', secache);

}

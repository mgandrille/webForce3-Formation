const fruits = ['./img/pomme.jpg', './img/poire.jpg', './img/citron.jpg'];

// console.log(fruits);

function hasard(max) {
    return Math.floor(Math.random()*(max + 1));
}
const max = fruits.length -1;
// console.log(max);
// console.log(hasard(max));
// console.log(fruits[hasard(max)]);

document.querySelector('img').src = `${fruits[hasard(max)]}`;
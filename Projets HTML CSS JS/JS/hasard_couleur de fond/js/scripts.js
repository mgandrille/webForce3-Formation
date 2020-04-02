function hasard(max) {
    return Math.floor(Math.random()*(max + 1));
}

document.getElementsByTagName('body')[0].style.background = `rgb(${hasard(255)}, ${hasard(255)}, ${hasard(255)})`;
// console.log(`rgb(${hasard()}, ${hasard()}, ${hasard()})`);
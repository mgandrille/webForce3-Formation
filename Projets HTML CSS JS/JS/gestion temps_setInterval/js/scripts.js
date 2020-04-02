/*
for (let i=0; i <= 10; i++) {
    j = 10 - i;
    if (j > 0) {
        console.log(j); 
    } else {
        console.log(`C'est la fête !`);
    }
}
*/

const para = document.querySelector('p');
const repet = setInterval(decompte, 1000);


function decompte () {
    for (let i=10; i >= 0; i--) {
        if (i > 0) {
            console.log(i); 
            para.innerText = i;
        } else {
            console.log(`C'est la fête !`);
            para.innerText = `C'est la fête !`;
            clearInterval(repet);
        }
    }
}


/* CORRECTION

const paragraph = document.getElementsByTagName('p')[0];
let i = 10;
paragraph.innerText = i;
const repetition = setInterval(() => {
    i --;
    if(i == 0) {
        paragraph.innerText = "C'est la fête!";
        clearInterval(repetition);
    } else {
        paragraph.innerText = i;
    }
}, 1000);

*/

const input = document.getElementsByTagName('input');
const val = document.getElementsByClassName('valeur');

for (let i=0; i < input.length; i++ ) {
    input[i].addEventListener('mousemove', () => {
        val[i].innerText = input[i].value;
    });
    
}






const input = document.getElementsByTagName('input')[0];
// console.log(input);
// console.log(input.value);
const val = document.getElementsByClassName('valeur')[0];
// console.log(val);

input.addEventListener('mousemove', modifValue);

function modifValue() {
    val.innerText = input.value;
    // console.log(input.value);
}





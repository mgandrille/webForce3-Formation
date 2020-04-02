const para = [...document.getElementsByTagName('p')];

for (let i in para) {
//    console.log(i);
    para[i].innerText = i;
}
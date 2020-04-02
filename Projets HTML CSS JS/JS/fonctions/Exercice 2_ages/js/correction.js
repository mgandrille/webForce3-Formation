const para = document.getElementsByTagName('p')[0];
let content;


function age(a){
    return 2020 - a;
}

function afficheAge(nom, annee){
    content = para.innerHTML;
    para.innerHTML = `${content} <br/> ${nom} a ${age(annee)} ans`;
}


afficheAge('Antoine',2000);
afficheAge('Maria',1980);
afficheAge('Rob',1990);
const para = document.getElementsByTagName('p')[0];


function afficheAge(nom, annee) {
    let age = 2020 - annee;
    console.log(`Cette année, ${nom} a ${age} ans`);

    para.innerText = `Cette année, ${nom} a ${age} ans`;
    //return ;
}

afficheAge('Antoine' , 2000);
afficheAge('Maria' , 1980);
afficheAge('Rob',1990);

const table = [
    {
        ville:'Lyon', 
        site:'https://www.lyon.fr', 
        gastronomie:'quenelles', 
        expression:'gones'
    },
    {
        ville:'Marseille', 
        site:'https://www.marseille.fr', 
        gastronomie:'bouillabaisse', 
        expression:'fada'
    },
    {
        ville:'Bordeaux', 
        site:'https://www.bordeaux.fr', 
        gastronomie:'canelé', 
        expression:'gavé'
    },
];

const ecrire = document.getElementsByTagName('main');


for (let i in table) {
    console.log(table[i]);
    document.querySelector('body').innerHTML +=  `<div>
        <a href='' target='_blank'>${table[i].site}
            <h2>${table[i].ville}</h2>
            <ul>
                <li>${table[i].gastronomie}</li>
                <li>${table[i].expression}</li>
            </ul>
        </a>
     </div>`;
}


/* CORRECTION 

const villes = [
    {
        ville: 'Lyon',
        site: 'http://www.lyon.fr',
        gastronomie: 'quenelles',
        expression: 'gones'
    },
    {
        ville: 'Marseille',
        site: 'http://www.marseille.fr',
        gastronomie: 'bouillabaisse',
        expression: 'fada'
    },
    {
        ville: 'Bordeaux',
        site: 'http://www.bordeaux.fr',
        gastronomie: 'canelé',
        expression: 'gavé'
    }
];
for(let i of villes) {
    document.querySelector('body').innerHTML += `
    <div>
        <a href="${i.site}" target="_blank">
            <h2>${i.ville}</h2>
            <ul>
                <li>${i.gastronomie}</li>
                <li>${i.expression}</li>
            </ul>
        </a>
    </div>
    `;
}

*/

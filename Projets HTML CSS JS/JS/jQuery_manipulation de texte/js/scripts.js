jQuery(document).ready(() => {

    let $texte = jQuery('p').text();

    console.log($texte.length);
    $texte = $texte.toLowerCase();
    console.log($texte.toLowerCase());

    $texte = $texte.replace(/\,|\.|\;|\?/g, '');
    console.log($texte.replace(/\,|\.|\;|\?/g, ''));

    const $table = $texte.split(' ');
    console.log($table);

    let compte = 0;
    $.each($table, (i, e) => {
        // console.log(i);
        // console.log(e);
        if(e == 'in') {
            compte++;
        }
    });
    console.log(compte);


});


/* CORRECTION

const $text = $('p').text();

console.log($text.length);

const textNouveau = $text.toLowerCase().replace(/\?|\.|\,|\;/g, '').split(' ');

console.log(textNouveau.length);

let count = 0;

$.each(textNouveau, (i, e) => {
    if(e == 'in') count++;
});

console.log(count);

*/
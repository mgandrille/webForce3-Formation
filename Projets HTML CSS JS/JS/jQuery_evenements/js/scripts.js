/* 1ere partie de l'exercice

jQuery(document).ready(() => {
    jQuery('li').on('click', () => {
        jQuery('.cache').css('display', 'block');
    })
    
})

*/

jQuery(document).ready(() => {

    jQuery('.menu').on('click', e => {
        jQuery('.cache').css('display', 'none');
        jQuery(e.currentTarget).next().css('display', 'block');
    })
    
})

// il faut d'abord lui indiquer de tt cacher (même si ca l'est déjà !)
// ensuite de faire apparaitre l'élément
// comme ca se lit ds le sens d'écriture, il va tt cacher puis faire apparaitre !
jQuery(document).ready(() => {

    jQuery('.clone').on('click', () => {
        jQuery('.mouton').eq(0).clone().appendTo('.bergerie')
    });

    jQuery('.surprise').on('click', () => {
        console.log('surprise');
        jQuery('<p>Oups !</p>').insertAfter('img');
        
        jQuery('<img src="img/chat.jpg">').appendTo('.bergerie');

        // jQuery('<button class="surprise">Surprise</button>').replaceWith('<a href="index.html">Recharger la page</a>');
    });

});

/* CORRECTION

$('.clone').on('click', () => {
    $('.mouton:first').clone().appendTo('.bergerie');
});
$('.surprise').on('click', () => {
    $('<p>Oups!</p>').insertAfter('img');
    $('<img src="./img/chat.jpg">').appendTo('.bergerie');
    $('button:last').replaceWith('<a href="./index.html">Recharger la page</a>');
});

*/
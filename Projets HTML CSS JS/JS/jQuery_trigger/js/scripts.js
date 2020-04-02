jQuery(document).ready(() => {

    // jQuery('.rouge').on('click', () => {
    //     jQuery('.bleu').trigger('click');
    //     jQuery('.jaune').trigger('click');
    // })

    jQuery('.rouge').on('click', () => {
        jQuery('.rouge').css('background', 'red');
        setTimeout( () => {jQuery('.bleu').trigger('click');} , 1000 );
    })

    jQuery('.bleu').on('click', () => {
        jQuery('.bleu').css('background', 'blue');
        setTimeout( () => {jQuery('.jaune').trigger('click');} , 1000 );
    })

    jQuery('.jaune').on('click', () => {
        jQuery('.jaune').css('background', 'yellow');
    })
    
})


/* CORRECTION

jQuery(document).ready(() =>{

    const $div = jQuery('div');
    
    $div.eq(0).on('click', e => {
        jQuery(e.currentTarget).css('background', 'red');
        setTimeout(() => {
            $div.eq(1).trigger('click');
        }, 1000);
    });

    $div.eq(1).on('click', e => {
        jQuery(e.currentTarget).css('background', 'blue');
        setTimeout(() => {
            $div.eq(2).trigger('click');
        }, 1000);
    });
    
    $div.eq(2).on('click', e => {
        jQuery(e.currentTarget).css('background', 'yellow');
    });
});

*/
jQuery(document).ready(() => {

    // Animation en-tête
    jQuery('.image').delay(15000).animate({
        'background': "url('img/background1.jpg') center / cover no-repeat"
    }, 15000);
    console.log('anim1');

    jQuery('.image').delay(15000).animate({
        'background': "url('img/background2.jpg') center / cover no-repeat"
    }, 15000);
    console.log('anim2');

    jQuery('.image').delay(15000).animate({
        'background': "url('img/background3.jpg') center / cover no-repeat"
    }, 15000);

    // Menu
    jQuery('.menubouton').on('click', () => {
        jQuery('#headermenu').fadeToggle('slow');
    });

    // filtre par prix
    const $grid = jQuery('.grid').isotope({
        getSortData: {
            number: '.number parseInt'
        }
    });
    
    jQuery('button').on('click', e => {
        // const $sort = $(e.currentTarget).attr('data-sort-value');
        const $sort = jQuery(e.currentTarget).data('sort-value');
        $grid.isotope({
            sortBy: $sort
        });
    });

});

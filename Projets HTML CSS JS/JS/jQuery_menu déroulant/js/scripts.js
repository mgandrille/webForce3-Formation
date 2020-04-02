
jQuery('header').on('click', () => {
        jQuery('.menu').toggleClass('open');
        jQuery('.menu').toggleClass('close');
        jQuery('.inside').slideToggle(1500);
    });

/* CORRECTION 

jQuery('.menu').on('click', e => {
    const $current = jQuery(e.currentTarget);
        $current.next().slideToggle();
        $current.toggleClass('close');
    });


*/


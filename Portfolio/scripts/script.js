jQuery(document).ready(() => {

    /* Home */
    jQuery('i.home').on('click'), () => {
        /* affiche partie #welcome de la page */
    }

    /* Menu */
    jQuery('i.menu').on('click', () => {
		  jQuery('#headermenu').fadeIn('slow');
	});
    jQuery('.clear, #headermenu a').on('click', () => {
		  jQuery('#headermenu').fadeOut('slow');
    });

    /*Ouverture des pages projets */
    jQuery('.discover').on('click', () => {
        /*ouvre la page projet n°x */
    })

});
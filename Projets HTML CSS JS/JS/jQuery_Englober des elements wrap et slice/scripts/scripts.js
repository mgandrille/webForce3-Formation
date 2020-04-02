jQuery(document).ready(() => {

    jQuery('img').wrap('<div class="bloc"></div>');

    const $slide1 = jQuery('.bloc').slice(0,3);
    const $slide2 = jQuery('.bloc').slice(3,7);
    $slide1.wrapAll('<div class="slide"></div>');
    $slide2.wrapAll('<div class="slide"></div>');

    jQuery('.slide').wrapAll('<div class="container"></div>');


});


/* CORRECTION 1

$('img').wrap('<div class="bloc"></div>');

for(let i in $('.bloc').toArray()){
    if(!(i % 3)) $('.bloc').slice(i, i+3).wrapAll('<div class="slide"></div>');
}

$('.slide').wrapAll('<div class="container"></div>');

*/

/* CORRECTION 2

$('img').wrap('<div class="bloc"></div>');

for (let i = 0; i < $img.length; i += 3) {
    $('.bloc').slice(i, i + 3).wrapAll('<div class="slide"></div>');
}

$('.slide').wrapAll('<div class="container"></div>');

*/

if (!(typeof jQuery == 'undefined')) {
    alert('JQuery est chargé !')
}

jQuery('section').children('p').css('color', 'red'); 
jQuery('section').find('h2').css('margin', '50px');
jQuery('.test').next().css('display', 'none');
jQuery('.test').prev().css('text-decoration', 'underline');
jQuery('fieldset').parent().css('background', 'grey');
jQuery('input').eq(0).css('background', 'red');



/* CORRECTION 

$.noConflict();
jQuery(document).ready(function($){

    const $section = $('section');
    const $test = $('.test');
    
    $section.children('p').css('color','red');
    $section.find('h2').css('margin','50px');
    $test.next().css('display','none');
    $test.prev().css('text-decoration','underline');
    $('fieldset').parent().css('background','grey');
    $('input').eq(0).css('background','red');
});

*/
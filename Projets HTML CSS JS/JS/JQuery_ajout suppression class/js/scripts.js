
jQuery('button').eq(0).on('click', () => {
    jQuery('div').addClass('red');
})

jQuery('button').eq(1).on('click', () => {
    jQuery('div').removeClass('red');
})

jQuery('button').eq(2).on('click', () => {
    jQuery('div').toggleClass('red');
})


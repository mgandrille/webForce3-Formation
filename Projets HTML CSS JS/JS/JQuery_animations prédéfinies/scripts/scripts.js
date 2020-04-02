var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// after testing, we can simply rotate the html body element how many degrees we want and also set other things like width/height parameters that will be enforced later in the code. in the example below the original orientaion is set to fit to mobile horizontal display (rotated 90 degrees in css), so if the code runs on a PC i will apply 0 degrees orientation to reset the css rotation

if (isMobile) {
        widthRatio = 0.95;
        heightRatio = 0.65;
        var deg = 90;
        document.body.style.webkitTransform = 'rotate('+deg+'deg)'; 
        document.body.style.mozTransform    = 'rotate('+deg+'deg)'; 
        document.body.style.msTransform     = 'rotate('+deg+'deg)'; 
        document.body.style.oTransform      = 'rotate('+deg+'deg)'; 
        document.body.style.transform       = 'rotate('+deg+'deg)'; 
}

jQuery('.fi').on('click', () => {
        jQuery('.fadein').fadeIn('fast');
});

jQuery('.fo').on('click', () => {
        jQuery('.fadeout').fadeOut('slow');
});

jQuery('.ft').on('click', () => {
        jQuery('.fadetoggle').fadeToggle(1000);
});

jQuery('.fto').on('click', () => {
        jQuery('.fadeto').fadeTo(2000, 0.2);
});

jQuery('.sd').on('click', () => {
        jQuery('.slidedown').slideDown(1500);
});

jQuery('.su').on('click', () => {
        jQuery('.slideup').slideUp(1500);
});

jQuery('.st').on('click', () => {
        jQuery('.slidetoggle').slideToggle(1500);
});

jQuery('.s').on('click', () => {
        jQuery('.show').show(1500);
});

jQuery('.h').on('click', () => {
        jQuery('.hide').hide(1500);
});

jQuery('.t').on('click', () => {
        jQuery('.toggle').toggle(1500);
});


/* CORRECTION

$('.fi').on('click', () =>  $('.fadein').fadeIn(10000));
$('.fo').on('click', () =>  $('.fadeout').fadeOut('slow'));
$('.fto').on('click', () => $('.fadeto').fadeTo(10000, 0.4));
$('.ft').on('click', () =>  $('.fadetoggle').fadeToggle('slow'));
$('.sd').on('click', () =>  $('.slidedown').slideDown(10000));
$('.su').on('click', () =>  $('.slideup').slideUp('slow'));
$('.st').on('click', () =>  $('.slidetoggle').slideToggle('slow'));
$('.s').on('click', () =>   $('.show').show('slow'));
$('.h').on('click', () =>   $('.hide').hide('slow'));
$('.t').on('click', () =>   $('.toggle').toggle(5000));

*/

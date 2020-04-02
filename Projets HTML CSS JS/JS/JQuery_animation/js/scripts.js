jQuery(document).ready(() =>{

    jQuery('.verte').animate({
        height : '+=100px',
        width : '+=100px'
    }, 1000);

    jQuery('.rouge').animate({'height': '+=100px'}, 1000).delay(2000).animate({'width': '+=100px'}, 1000);
    
});


/* CORRECTION 1

$('div:first').animate({
            height : '+=100px'
      }, 1000).animate({
            width : '+=100px'
      }, 1000);
      $('div:last').animate({
            width : '+=100px',
            height : '+=100px'
      }, 1000);

*/

/* CORRECTION 2

$('div:first').animate({
            height : '+=100px'
      }, 1000).animate({
            width : '+=100px'
      }, 1000);
      $('div:last')
      .animate({
            width : '+=100px'
      },
      {
            duration: 1000,
            queue: false
      })
      .animate({
            height : '+=100px'
      }, 1000);

      */

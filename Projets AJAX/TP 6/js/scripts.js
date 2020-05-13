$.noConflict();
jQuery(document).ready(function($) {

    (function() {
        $("#buttonGet").on("click", function () {
            
            $('#loading').removeClass('d-none');

            $.ajax(`https://stats.naminilamy.fr`)
                .done(function (data) {
                    event.preventDefault();

                    console.log(data);

                    if(data.length != 0) {
                        $.each(data, (i, d) => {
                            console.log(d);
                            $.each(d, (i, e) => {
                                console.log(`${i} = ${e}`);
                            })
                        });
                    } else {
                        alert('loupé !');
                    }

    
                    $('#loading').addClass('d-none');
    
                })
                .fail(function (jqXHR, exception) {
                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested JSON parse failed.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.';
                    } else if (exception === 'abort') {
                        msg = 'Ajax request aborted.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
                    alert(msg);
                })
                // .always(function () {
                //     alert("complete");
                // });

        }); 
    }) ();



});
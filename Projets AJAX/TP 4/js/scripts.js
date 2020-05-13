$.noConflict();
jQuery(document).ready(function($) {

    window.addEventListener('load', () => {
        if(window.jQuery) {
            alert("le script est chargé");
        } else {
            alerte("Problème avec le script");
        }
    });

    // $(document).ajaxError(function() {
    //     alert("Erreur d'execution AJAX");
    // });

    (function() {
        $("#ajaxButton").on("click", function () {

            $('#loading').removeClass('d-none');

            let codePostal = $("#codePostal").val();
            $.ajax(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`)
                .done(function (villes) {
                    event.preventDefault();

                    // console.log(villes);
                    // console.log(status);
    
                    if(villes.length != 0) {
                        console.log(villes.length);
                        $('#resultat').replaceWith('<div id="resultat"> </div>')
                        $('#resultat').append('<p>' + villes.length + ' ville(s) trouvée(s) </p>')
                        $('<ul id="listeVilles">').appendTo('#resultat');
                        $.each(villes, (i, ville) =>{
                            // console.log(i);
                            console.log(ville.nom);
                            $('#listeVilles').append('<li>' + ville.nom + '</li>');
                        });
                        $('#resultat').append('</ul>');
                    } else {
                        $('#resultat').replaceWith('<div id="resultat"><p>Pas de résultat trouvé ! </p></div>')
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
                .always(function () {
                    alert("complete");
                });
        }); 
    }) ();



});
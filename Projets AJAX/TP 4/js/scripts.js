$.noConflict();
jQuery(document).ready(function($) {

    (function() {
        $("#ajaxButton").on("click", function () {

            $('#loading').removeClass('d-none');

            let codePostal = $("#codePostal").val();
            $.get(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`, function (villes) {
                console.log(villes);

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

            });

            event.preventDefault();

        }); 
                
    }) ();



});
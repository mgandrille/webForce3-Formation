$.noConflict();
jQuery(document).ready(function($) {

    (function() {
        $("#ajaxButton").on("click", function () {
            let codePostal = $("#codePostal").val();
            $.get(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`, function (villes) {
                // console.log(villes);

                $('#resultat').replaceWith('<div id="resultat"> </div>')
                $('<ul id="listeVilles">').appendTo('#resultat');
                $.each(villes, (i, ville) =>{
                    console.log(i);
                    console.log(ville.nom);
                    $('#listeVilles').append('<li>' + ville.nom + '</li>');
                });
                $('#resultat').append('</ul>');

            });
        });  
    }) ();



});
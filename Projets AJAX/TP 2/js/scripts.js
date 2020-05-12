$.noConflict();
jQuery(document).ready(function($) {

    (function() {
        $("#ajaxButton").on("click", function () {
            let codePostal = $("#codePostal").val();
            $.get(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`, function (villes) {
                console.log(villes);

                let nomVilles = "";
                for(let i in villes) {
                    console.log(i);
                    console.log(villes[i].nom);
                    nomVilles = nomVilles + villes[i].nom + " , " ;
                }

                alert(JSON.stringify(nomVilles));
            });
        });  
    }) ();



}
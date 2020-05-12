(function() {
    $("#ajaxButton").on("click", function () {
        let codePostal = $("#codePostal").val();
        $.get(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`, function (data) {
            alert(JSON.stringify(data));
        });
    });  
}) ();

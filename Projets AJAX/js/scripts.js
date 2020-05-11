(function() {
    let httpRequest;
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);  

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Abandon : Impossible de créer une instance de XMLHTTP');
            return false;
        }

        let codePostal = document.getElementById('codePostal').value;
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', `https://geo.api.gouv.fr/communes?codePostal=${codePostal}`);
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let villes = JSON.parse(httpRequest.responseText);
                console.log(villes);
                console.log(villes[0].nom);
                alert(villes[0].nom);

            } else {
                alert('Il y a eu un problème avec la requête.');
            }
        }
    }
}) ();

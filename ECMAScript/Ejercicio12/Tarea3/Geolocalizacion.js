"use strict";
class Geolocalizacion {
    constructor() {
        this.showCoordinates();
    }

    showCoordinates() {
        // Save object reference
        let _this = this;

        $(document).ready(function () {
            $("#btnShowCoord").click(function() {
                if (window.navigator.geolocation) {
                    window.navigator.geolocation.getCurrentPosition(_this.showCurrentPosition, _this.handleError);
                } else {
                    alert("El navegador no soporta la geolocalización");
                }
            });
        });
    }

    showCurrentPosition(position) {
        $(document).ready(function () {
            let data = "";

            data += "<li>Latitud: " + position.coords.latitude + " grados</li>";
            data += "<li>Longitud: " + position.coords.longitude + " grados</li>";
            data += "<li>Precisión (Latitud/Longitud): " + position.coords.accuracy + " metros</li>";
            if (position.coords.altitude !== null) {
                data += "<li>Altitud: " + position.coords.altitude + " metros</li>";
                data += "<li>Precisión (Altitud): " + position.coords.altitudeAccuracy + " metros</li>";
            }

            $("#coordPosition").after(data);

            // Show static map
            let url = "https://maps.googleapis.com/maps/api/staticmap?center=";

            url += position.coords.latitude + "," + position.coords.longitude;
            url += "&zoom=12&size=400x400&sensor=false&markers=";
            url += position.coords.latitude + "," + position.coords.longitude;
            url += "&key=AIzaSyDAtch896ABia80LAOvdVoZ6ERhVFcJ5sg";

            $("#mapPosition").attr("src", url);
        });
    }

    handleError(error) {
        alert("Ha ocurrido un error: (Código de error: " + error.code + ")" + error.message); 
    }
}


window.addEventListener("load", function() { 
    new Geolocalizacion();
});






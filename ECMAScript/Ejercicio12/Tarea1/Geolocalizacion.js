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
                    window.navigator.geolocation.getCurrentPosition(_this.showCurrentPosition);
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
        });
    }
}


window.addEventListener("load", function() { 
    new Geolocalizacion();
});




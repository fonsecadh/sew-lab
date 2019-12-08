"use strict";
class Geolocalizacion {
    showMap() {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(this.createMap, this.handleError);
        } else {
            alert("El navegador no soporta la geolocalización");
        } 

    }

    createMap(position) {
        let userPos = { lat: position.coords.latitude, lng: position.coords.longitude };
        let theMap = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 18, center: userPos });
        let theMarker = new google.maps.Marker({ position: userPos, map: theMap }); 
    }

    handleError(error) {
        alert("Ha ocurrido un error: (Código de error: " + error.code + ")" + error.message);
    }
}

var geoloc = new Geolocalizacion();


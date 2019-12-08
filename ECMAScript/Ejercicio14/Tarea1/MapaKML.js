"use strict";
class MapKML {
    constructor() {
        this.addKMLBtnListener();
        this.theMap = "";
        this.theMarker = "";
    }

    showMap() {
        let fushimiInari = { lat: 34.96676689, lng: 135.77084584 }; 
        this.theMap = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 10, center: fushimiInari });
        this.theMarker = new google.maps.Marker({ position: fushimiInari, map: this.theMap }); 
    }

    addKMLBtnListener() {
        $(document).ready(function () {
            $("#btnShowKML").click(function() {
                let kmlUrl = "https://raw.githubusercontent.com/fonsecadh/sew-lab/master/ECMAScript/Ejercicio14/rutas.kml";
                let kmlLayer = new google.maps.KmlLayer(kmlUrl, { supressInfoWindows: true, preserveViewport: false, map: this.theMap });
            });
        });
    }
}

var mapKML = new MapKML();


"use strict";
class MapKML {
    showMap() {
        let fushimiInari = { lat: 34.96676689, lng: 135.77084584 }; 
        let theMap = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 7, center: fushimiInari, mapTypeId: "terrain" });
        let kmlUrl = "https://raw.githubusercontent.com/fonsecadh/sew-lab/master/ECMAScript/Ejercicio14/Tarea1/rutas.kml";
        let kmlLayer = new google.maps.KmlLayer(kmlUrl, { supressInfoWindows: true, preserveViewport: false, map: theMap });
    }
}

var mapKML = new MapKML();


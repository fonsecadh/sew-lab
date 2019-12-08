"use strict";
class MapKML {
    showMap() {
        let fushimiInari = { lat: 135.77084584, lng: 34.96676689 };
        let theMap = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 10, center: fushimiInari });
        let theMarker = new google.maps.Marker({ position: fushimiInari, map: theMap }); 
        let kmlUrl = "";
        let kmlLayer = new google.maps.KmlLayer(kmlUrl, { supressInfoWindows: true, preserveViewport: false, map: theMap });
    }
}

var mapKML = new MapKML();


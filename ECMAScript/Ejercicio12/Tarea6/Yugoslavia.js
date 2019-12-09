"use strict";
class YugoslaviaCapitalsMap {
    showMap() {
        let belgrado = { lat: 44.784952, lng: 20.450741 };
        let zagreb = { lat: 45.812359, lng: 15.981489 };
        let skopie = { lat: 42.005128, lng: 21.439981 };
        let titogrado = { lat: 42.426340, lng: 19.257923 };
        let liubliana = { lat: 46.056503, lng: 14.504619 };
        let sarajevo = { lat: 43.857010, lng: 18.407009 };
        let theMap = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 6, center: belgrado });
        new google.maps.Marker({ position: belgrado, map: theMap }); 
        new google.maps.Marker({ position: zagreb, map: theMap }); 
        new google.maps.Marker({ position: skopie, map: theMap }); 
        new google.maps.Marker({ position: titogrado, map: theMap }); 
        new google.maps.Marker({ position: liubliana, map: theMap }); 
        new google.maps.Marker({ position: sarajevo, map: theMap }); 
    }
}

var ycm = new YugoslaviaCapitalsMap();

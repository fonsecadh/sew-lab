"use strict";
class MapGeoJSON {
    constructor() {
        this.map = null;
        this.addInputFileListener();
    }

    showMap() {
        let fushimiInari = { lat: 34.96676689, lng: 135.77084584 }; 
        this.map = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 7, center: fushimiInari, mapTypeId: "terrain" });
    }

    addInputFileListener() {
        // Save object reference
        let _this = this;

        $(document).ready(function() {
            $("#inputFile").change(function() {
                _this.loadInputFile();
            });
        });
    }

    loadInputFile() {
        let f = $("#inputFile").prop("files")[0];
        let reader = new FileReader();
        let _this = this;
        reader.onload = function(e) {
            _this.loadGeoJSON(reader.result);
        };
        reader.readAsText(f);
    }

    loadGeoJSON(geoJSON) {
        let parsedGeoJSON;
        try {
            parsedGeoJSON = JSON.parse(geoJSON);
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert("Archivo GeoJSON no válido.");
            } else {
                alert("Ha ocurrido un error al parsear el fichero JSON");
            }            
        }

        this.map.data.addGeoJson(parsedGeoJSON);
    }
}

var mapGeoJSON = new MapGeoJSON();



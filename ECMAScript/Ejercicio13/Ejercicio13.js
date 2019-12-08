"use strict";
class DocumentModifier {
    constructor() {
        // Attributes
        this.fileName = "";
        this.fileType = "";
        this.fileSize = "";


        this.hideDataElementsByDefault();
        this.addInputFileListener();
    }

    hideDataElementsByDefault() {
        $(document).ready(function () {
            $(".data").hide();
            $(".metadata").hide();
        });
    }

    showDataElements() {
        $(document).ready(function () {
            $(".data").show();
        });
    }

    showMetadataElements() {
        $(document).ready(function () {
            $(".metadata").show();
        });
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
        this.fileName = String(f.name);
        this.fileType = String(f.type);
        this.fileSize = String(f.size);
        this.showMetadata();
        this.showData(f);
    }

    showMetadata() {
        this.showMetadataElements();

        let metadata = "";

        metadata += "<li>Nombre del fichero: " + this.fileName + "</li>";
        metadata += "<li>Tipo del fichero: " + this.fileType + "</li>";
        metadata += "<li>Tamaño del fichero: " + this.fileSize + "</li>";

        $("#metadataFile").after(metadata);
    }

    showData(file) {
        if (this.fileType.match(/text.*/) || this.type.match("application/json")) {
            this.showDataElements();
            let reader = new FileReader();
            reader.onLoad = function(e) {
                $("#dataFile").text(reader.result);
            };
            reader.readAsText(file);
        } else {
            $("#dataFile").text("");
        }
    }
}

window.addEventListener("load", function() { 
    new DocumentModifier();
});



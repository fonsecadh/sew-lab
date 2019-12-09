"use strict";
class ExtractInfoWikipediaApi {
    constructor() {
        this.addTechListener();
    }

    addTechListener() {
        // Save object reference
        let _this = this;

        $(document).ready(function () {
            $("#showInfo").click(function() {
                let tech = $("#selectedTech option:selected").val();
                _this.showTechInfo(tech);
            });
        });
    }

    showTechInfo(tech) {
        if (tech === null) {
            return;
        }

        $.getJSON("https://es.wikipedia.org/api/rest_v1/page/summary/" + tech, function(jsonData) {
            $("#result").text(jsonData.extract);
        });
    }
}

window.addEventListener("load", function() { 
    new ExtractInfoWikipediaApi();
});




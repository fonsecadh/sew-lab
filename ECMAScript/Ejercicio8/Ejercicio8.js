"use strict";
class MeteoData {
    constructor() {
        this.writeMeteoDataOfCity("Kyoto");
        this.writeMeteoDataOfCity("Tokyo");
        this.writeMeteoDataOfCity("Nara");
        this.writeMeteoDataOfCity("Kanazawa");
        this.writeMeteoDataOfCity("Minakami");
    }
    writeMeteoDataOfCity(city) {
        $(document).ready(function () {
            // TODO: Sign up and get my own API Key
            $.getJSON("api.openweathermap.org/data/2.5/weather?q=" + city.toString() + "&units=metric", function(jsonData) {
                let output="<div>";
                for (var d in jsonData.list[0]) {
                    output += "<p>Nombre de la ciudad: " + d.name + "</p>";
                    output += "<p>País: " + d.sys.country + "</p>";
                    for (var w in d.weather) {
                        output += "<ul>";
                        output += "<li><img src=http://openweathermap.org/img/w/" + w.icon + ".png alt=" + w.description + "></li>";
                        output += "<li>" + w.main + "</li>";
                        output += "<li>Descripción: " + w.description + "</li>";
                        output += "</ul>";
                    }

                    output += "Más Información:"
                    output += "<ul>";
                    output += "<li>Temperatura: " + d.main.temp + "ºC</li>";
                    output += "<li>Presión: " + d.main.pressure + "Pa</li>";
                    output += "<li>Humedad: " + d.main.humidity + "%</li>";
                    output += "<li>Temperatura mínima: " + d.main.temp_min + "ºC</li>";
                    output += "<li>Temperatura máxima: " + d.main.temp_max + "ºC</li>";
                    output += "<li>Lluvias: " + d.rain + "%</li>";
                    output += "<li>Nieve: " + d.snow + "%</li>";
                    output += "<li>Nubes: " + d.clouds.all + "%</li>";
                    output += "</ul>";
                }
                output += "</div>";
                $("main").append(output);
            });
        });
    }
}

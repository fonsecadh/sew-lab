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
            let apiKey = "47b790fd0fc41878c80c57c9846132cb";
            $.get("https://api.openweathermap.org/data/2.5/weather?q=" + city.toString() + "&mode=xml&units=metric&lang=es&APPID=" + apiKey, function(xmlData) {
                let output="<div>";
                let d = xmlData;
                let c = $("city", d.documentElement);
                output += "<h2>Nombre de la ciudad: " + c.attr("name") + "</h2>";
                output += "<p>País: " + $("country", c).text() + "</p>";
                let w = $("weather", d.documentElement);
                output += "<ul>";
                output += "<li><img src=\"https://openweathermap.org/img/w/" + w.attr("icon") + ".png\" alt=" + w.attr("value") + "></li>";
                output += "<li>Descripción: " + w.attr("value") + "</li>";
                output += "</ul>";
                output += "<p>Más Información:</p>"
                output += "<ul>";
                output += "<li>Temperatura: " + $("temperature", d.documentElement).attr("value") + "ºC</li>";
                output += "<li>Presión: " + $("temperature", d.documentElement).attr("value") + "hPa</li>";
                output += "<li>Humedad: " + $("humidity", d.documentElement).attr("value") + "%</li>";
                output += "<li>Temperatura mínima: " + $("temperature", d.documentElement).attr("min") + "ºC</li>";
                output += "<li>Temperatura máxima: " + $("temperature", d.documentElement).attr("max") + "ºC</li>";
                let wind = $("wind", d.documentElement);
                output += "<li>Velocidad del viento: " + $("speed", wind).attr("value") + "m/s</li>";
                output += "<li>Nubes: " + $("clouds", d.documentElement).attr("value") + "%</li>";
                output += "</ul>";                
                output += "</div>";
                $("main").append(output);
            });
        });
    }    
}

window.addEventListener("load", function() {
    new MeteoData();
});


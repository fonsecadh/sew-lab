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
            $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city.toString() + "&units=metric&lang=es&APPID=" + apiKey, function(jsonData) {
                let output="<div>";
                let d = jsonData;
                output += "<h2>Nombre de la ciudad: " + d.name + "</h2>";
                output += "<p>País: " + d.sys.country + "</p>";
                for (var i = 0; i < d.weather.length; i++) {
                    let w = d.weather[i];
                    output += "<ul>";
                    output += "<li><img src=\"https://openweathermap.org/img/w/" + w.icon + ".png\" alt=" + w.description + "></li>";
                    output += "<li>" + w.main + "</li>";
                    output += "<li>Descripción: " + w.description + "</li>";
                    output += "</ul>";
                }
                output += "<p>Más Información:</p>"
                output += "<ul>";
                output += "<li>Temperatura: " + d.main.temp + "ºC</li>";
                output += "<li>Presión: " + d.main.pressure + "Pa</li>";
                output += "<li>Humedad: " + d.main.humidity + "%</li>";
                output += "<li>Temperatura mínima: " + d.main.temp_min + "ºC</li>";
                output += "<li>Temperatura máxima: " + d.main.temp_max + "ºC</li>";
                output += "<li>Velocidad del viento: " + d.wind.speed + "m/s</li>";
                output += "<li>Nubes: " + d.clouds.all + "%</li>";
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

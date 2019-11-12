"use strict";
class InfoNavegador {
    constructor(nombreCodigo, nombreNav, version, cookiesActivas, onLine, plataforma, userAgent, lenguajeNav, vendedor, producto) {
        this.nombreCodigo = nombreCodigo;
        this.nombreNav = nombreNav;
        this.version = version;
        this.cookiesActivas = cookiesActivas;
        this.onLine = onLine;
        this.plataforma = plataforma;
        this.userAgent = userAgent;
        this.lenguajeNav = lenguajeNav;
        this.vendedor = vendedor;
        this.producto = producto;
    }
    escribirNombreCodigo() {
        document.write(this.nombreCodigo);
    }
    escribirParrafo(textoP) {
        document.write("<p>" + textoP + "</p>");
    }
    escribirParrafos() {
        this.escribirParrafo(this.cursoActual);
        this.escribirParrafo(this.nombreEstudiante);
        this.escribirParrafo(this.email);
    }    
}
var cabecera = new Cabecera("Software y Estándares para la Web", 
    "Ingeniería Informática del Software", 
    "Escuela de Ingeniería Informática del Software",
    "Universidad de Oviedo",
    "Cuarto",
    "Hugo Fonseca Díaz",
    "UO258318@uniovi.es");
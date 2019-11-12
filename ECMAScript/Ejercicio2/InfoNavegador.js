"use strict";
class InfoNavegador {
    constructor(nombreCodigo, nombreNav, version, cookiesActivas, enLinea, plataforma, agenteUsuario, lenguajeNav, vendedor, producto) {
        this.nombreCodigo = nombreCodigo;
        this.nombreNav = nombreNav;
        this.version = version;
        this.cookiesActivas = cookiesActivas;
        this.enLinea = enLinea;
        this.plataforma = plataforma;
        this.agenteUsuario = agenteUsuario;
        this.lenguajeNav = lenguajeNav;
        this.vendedor = vendedor;
        this.producto = producto;
    }
    escribirNombreCodigo() {
        document.write("Nombre del código: " + this.nombreCodigo);
    }
    escribirNombreNav() {
        document.write("Nombre del navegador: " + this.nombreNav);
    }
    escribirVersion() {
        document.write("Versión: " + this.version);
    }
    escribirCookiesActivas() {
        document.write("Cookies activas: " + this.cookiesActivas);
    }
    escribirEnLinea() {
        document.write("En línea: " + this.enLinea);
    }
    escribirPlataforma() {
        document.write("Plataforma: " + this.plataforma);
    }
    escribirAgenteUsuario() {
        document.write("Agente usuario: " + this.agenteUsuario);
    }
    escribirLenguajeNav() {
        document.write("Idioma navegador: " + this.lenguajeNav);
    }
    escribirVendedor() {
        document.write("Vendedor: " + this.vendedor);
    }
    escribirProducto() {
        document.write("Producto: " + this.producto);
    }
    escribirParrafo(textoP) {
        document.write("<p>" + textoP + "</p>");
    }
    escribirParrafos() {
        this.escribirParrafo("Nombre del código: " + this.nombreCodigo);
        this.escribirParrafo("Versión: " + this.version);
        this.escribirParrafo("Cookies activas: " + this.cookiesActivas);
        this.escribirParrafo("En línea: " + this.enLinea);
        this.escribirParrafo("Plataforma: " + this.plataforma);
        this.escribirParrafo("Agente usuario: " + this.agenteUsuario);
        this.escribirParrafo("Vendedor: " + this.vendedor);
        this.escribirParrafo("Producto: " + this.producto);
    }    
}
var theBrowser = navigator
var infoNavegador = new InfoNavegador(theBrowser.appCodeName, theBrowser.appName, theBrowser.appVersion, theBrowser.cookieEnabled, theBrowser.onLine, theBrowser.platform, theBrowser.userAgent, theBrowser.language, theBrowser.vendor, theBrowser.product);



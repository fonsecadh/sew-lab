"use strict";
class Cabecera {
    constructor(nombreAsignatura, nombreTitulacion, nombreCentro, nombreUniversidad, cursoActual, nombreEstudiante, email) {
        this.nombreAsignatura = nombreAsignatura;
        this.nombreTitulacion = nombreTitulacion;
        this.nombreCentro = nombreCentro;
        this.nombreUniversidad = nombreUniversidad;
        this.cursoActual = cursoActual;
        this.nombreEstudiante = nombreEstudiante;
        this.email = email;
    }
    escribirAsignatura() {
        document.write(this.nombreAsignatura);
    }
    escribirTitulacion() {
        document.write(this.nombreTitulacion);
    }
    escribirCentro() {
        document.write(this.nombreCentro);
    }
    escribirUniversidad() {
        document.write(this.nombreUniversidad);
    }
    escribirCursoActual() {
        document.write(this.cursoActual);
    }
    escribirEstudiante() {
        document.write(this.nombreEstudiante);
    }
    escribirEmail() {
        document.write(this.email);
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
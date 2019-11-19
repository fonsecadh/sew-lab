"use strict";
class BasicCalculator {
    constructor() {
        // We store the result text field into a class attribute
        this.resultTxtField = document.getElementById("resTxt");

        // We add the listeners for the buttons representing the calculator numbers
        var i;
        for (i = 0; i <= 9; i++) {
            var aux = "num"; 
            var numId = aux.concat(i.toString());
            document.getElementById(numId).addEventListener("click", () => this.resultTxtField.value += i.toString()); 
        }
    }

}

var calc = new BasicCalculator();

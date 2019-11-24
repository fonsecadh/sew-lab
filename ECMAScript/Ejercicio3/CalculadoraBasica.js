"use strict";
class BasicCalculator {
    constructor() {
        // We store the result text field into a class attribute
        this.resultTxtField = document.getElementById("resTxt");
        this.resultTxtField.value = ""; // Restart the text field value

        // Save object reference
        var _this = this; 

        // We add the listeners for the buttons representing the calculator's numbers
        var i;
        for (i = 0; i <= 9; i++) {
            var numId = "num".concat(i.toString()); // Create the button ID

            // Add listeners for the number buttons
            document.getElementById(numId).addEventListener("click", function(wrapBtnNumber) {
                return function() { _this.resultTxtField.value += wrapBtnNumber.toString(); }
            }(i)); // We are wrapping the listener function because we are inside a loop
        }

        // We add the listeners for the buttons representing the calculator's operators
        document.getElementById("opDiv").addEventListener("click", function() {
            _this.resultTxtField.value += "/";
        });

        document.getElementById("opMul").addEventListener("click", function() {
            _this.resultTxtField.value += "*";
        });
        
        document.getElementById("opMinus").addEventListener("click", function() {
            _this.resultTxtField.value += "-";
        });

        document.getElementById("opPlus").addEventListener("click", function() {
            _this.resultTxtField.value += "+";
        });
    }
}

window.addEventListener("load", function() { 
    new BasicCalculator();
});



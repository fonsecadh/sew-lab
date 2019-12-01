"use strict";
class BasicCalculator {
    constructor() {
        // We store the result text field into a class attribute
        this.resultTxtField = document.getElementById("resTxt");
        this.resultTxtField.value = ""; // Restart the text field value
        this.calcStatus = "OK"; // Default status (OK, ERROR, EVALUATED)
        this.register = 0; // Memory register


        // We add the button listeners
        this.addNumberListeners();
        this.addOperatorListeners();
        this.addRegisterListeners();
        this.addDotListener();
        this.addClearListener();
        this.addEqualsListener();
    }

    addNumberListeners() {
        // Save object reference
        let _this = this; 

        // We add the listeners for the buttons representing the calculator's numbers
        let i;
        for (i = 0; i <= 9; i++) {
            let numId = "num".concat(i.toString()); // Create the button ID

            // Add listeners for the number buttons
            document.getElementById(numId).addEventListener("click", function(wrapBtnNumber) {
                return function() { 
                    _this.checkStatus(); // We check the status of the calculator
                    _this.resultTxtField.value += wrapBtnNumber.toString(); 
                }
            }(i)); // We are wrapping the listener function because we are inside a loop
        }
    }

    addOperatorListeners() {
        // Save object reference
        let _this = this; 

        // We add the listeners for the buttons representing the calculator's operators
        document.getElementById("opDiv").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += "/";
        });

        document.getElementById("opMul").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += "*";
        });

        document.getElementById("opMinus").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += "-";
        });

        document.getElementById("opPlus").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += "+";
        });
    }

    addRegisterListeners() {
        // Save object reference
        let _this = this; 

        // We add the listeners for the buttons representing the calculator's registers
        document.getElementById("mrc").addEventListener("click", function() {
            _this.resultTxtField.value = _this.register; // Show register
            _this.register = 0; // Clear register
        });

        document.getElementById("mminus").addEventListener("click", function() {
            if (_this.calcStatus === "EVALUATED") {
                _this.register = eval(_this.register + "-" +  _this.resultTxtField.value);
            }
        });

        document.getElementById("mplus").addEventListener("click", function() {
            if (_this.calcStatus === "EVALUATED") {
                _this.register = eval(_this.register + "+" + _this.resultTxtField.value); 
            }
        });
    }

    addDotListener() {
        // Save object reference
        let _this = this; 

        document.getElementById("dot").addEventListener("click", function() { 
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += ".";
        });
    }

    addClearListener() {
        // Save object reference
        let _this = this; 

        document.getElementById("clear").addEventListener("click", function() {
            _this.resultTxtField.value = "";
        });
    }

    addEqualsListener() {
        // Save object reference
        let _this = this; 

        document.getElementById("eq").addEventListener("click", function() {
            // TODO: Improve this to check for wrong input before evaluating
            try {
                _this.resultTxtField.value = eval(_this.resultTxtField.value);
                _this.calcStatus = "EVALUATED";
            } catch (e) {
                if (e instanceof SyntaxError) {
                    _this.resultTxtField.value = "INVALID SYNTAX";
                }
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            }
        });
    }

    checkStatus() {
        // If previous execution caused an error
        if (this.calcStatus === "ERROR") {
            this.resultTxtField.value = ""; // Restart txt field
            this.calcStatus = "OK";
        } else if (this.calcStatus === "EVALUATED") {
            this.resultTxtField.value = ""; // Restart txt field
            this.calcStatus = "OK";
        }
    }
}

window.addEventListener("load", function() { 
    new BasicCalculator();
});



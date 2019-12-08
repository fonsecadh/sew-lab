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
            if (_this.checkInput(_this.resultTxtField.value) === true) {
                try {
                    _this.resultTxtField.value = eval(_this.resultTxtField.value);
                    _this.calcStatus = "EVALUATED";
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        _this.resultTxtField.value = "INVALID SYNTAX";
                    }
                    _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
                }
            } else {
                _this.resultTxtField.value = "INVALID SYNTAX";
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

    checkInput(input) {
        input = input.replace("(", "");
        input = input.replace(")", "");
        input = input.replace("**", "");
        return /^-?[0-9]+(.[0-9]+)*((\+|\-|\*|\/)-?[0-9]+(.[0-9]+)*)*$/.test(input);
    }
}

class ScientificCalculator extends BasicCalculator {
    constructor() {
        // Superclass constructor
        super();

        // Calculator mode
        this.mode == "DEG" // Can be DEG (Degrees) or RAD (Radians)

        // We add the new listeners to the scientific calculator
        this.addMoreOperatorListeners();
        this.addRegisterListeners(); // Overriden superclass method
        this.addParenthesisListeners();
        this.addPiListener();
        this.addModeListeners();
    }

    evalCurrentExpression() {
        if (this.checkInput(this.resultTxtField.value) === true) {
            try {
                this.resultTxtField.value = eval(this.resultTxtField.value);
            } catch (e) {
                if (e instanceof SyntaxError) {
                    this.resultTxtField.value = "INVALID SYNTAX";
                }
               this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            }
        } else {
            this.resultTxtField.value = "INVALID SYNTAX";
            this.calcStatus = "ERROR"; // Calculator status changes to ERROR
        }
    }

    factorial(n) {
        let result = 1;
        for (var i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    addMoreOperatorListeners() {
        // Save object reference
        let _this = this; 

        // We add the listeners for the buttons representing the calculator's new operators
        document.getElementById("opSquare").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.evalCurrentExpression(); // Evaluate current expression in the text field
            if (_this.calcStatus !== "ERROR") {
                _this.resultTxtField.value = String(Math.pow(parseInt(_this.resultTxtField.value), 2));
            }
        });

        document.getElementById("opPower").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += "**";
        });

        document.getElementById("opSin").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.evalCurrentExpression(); // Evaluate current expression in the text field
            if (_this.calcStatus !== "ERROR") {
                if (_this.mode === "DEG") {
                    _this.resultTxtField.value = String(Math.sin(_this.toRadians(parseInt(_this.resultTxtField.value))));
                } else {
                    _this.resultTxtField.value = String(Math.sin(parseInt(_this.resultTxtField.value)));
                }
            }
        });

        document.getElementById("opCos").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.evalCurrentExpression(); // Evaluate current expression in the text field
            if (_this.calcStatus !== "ERROR") {
                if (_this.mode === "DEG") {
                    _this.resultTxtField.value = String(Math.cos(_this.toRadians(parseInt(_this.resultTxtField.value))));
                } else {
                    _this.resultTxtField.value = String(_this.toRadians(parseInt(_this.resultTxtField.value)));
                }
            }
        });

        document.getElementById("opTan").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.evalCurrentExpression(); // Evaluate current expression in the text field
            if (_this.calcStatus !== "ERROR") {
                if (_this.mode === "DEG") {
                    _this.resultTxtField.value = String(Math.tan(_this.toRadians(parseInt(_this.resultTxtField.value))));
                } else {
                    _this.resultTxtField.value = String(Math.tan(parseInt(_this.resultTxtField.value)));
                }
            }
        });

        document.getElementById("opSqrRoot").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.evalCurrentExpression(); // Evaluate current expression in the text field
            if (_this.calcStatus !== "ERROR") {
                _this.resultTxtField.value = String(Math.sqrt(parseInt(_this.resultTxtField.value)));
            }
        });

        document.getElementById("opPowerTen").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.evalCurrentExpression(); // Evaluate current expression in the text field
            if (_this.calcStatus !== "ERROR") {
                _this.resultTxtField.value = String(Math.pow(10, parseInt(_this.resultTxtField.value)));
            }
        });

        document.getElementById("opLog").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.evalCurrentExpression(); // Evaluate current expression in the text field
            if (_this.calcStatus !== "ERROR") {
                _this.resultTxtField.value = String(Math.log(parseInt(_this.resultTxtField.value)));
            }
        });

        document.getElementById("opExp").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += "*10**";
        });

        document.getElementById("opMod").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += "%";
        });

        document.getElementById("opDel").addEventListener("click", function() {
            if (_this.resultTxtField.value !== null) {
                _this.resultTxtField.value = _this.resultTxtField.value.substring(0, _this.resultTxtField.value.length - 1);
            }
        });

        document.getElementById("opFactorial").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.evalCurrentExpression(); // Evaluate current expression in the text field
            if (_this.calcStatus !== "ERROR") {
                let f = _this.factorial(parseInt(_this.resultTxtField.value));
                _this.resultTxtField.value = String(f);
            }
        });

        document.getElementById("opSign").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.evalCurrentExpression(); // Evaluate current expression in the text field
            if (_this.calcStatus !== "ERROR") {
                let result = - parseInt(_this.resultTxtField.value);
                _this.resultTxtField.value = String(result);
            }
        });
    }

    addRegisterListeners() {
        // Save object reference
        let _this = this; 

        // We add the listeners for the buttons representing the calculator's registers
        document.getElementById("mc").addEventListener("click", function() {
            _this.register = 0; // Clear register
        });

        document.getElementById("mr").addEventListener("click", function() {
            _this.resultTxtField.value = _this.register; // Show register
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

        document.getElementById("ms").addEventListener("click", function() {
            if (_this.calcStatus === "EVALUATED") {
                _this.register = _this.resultTxtField.value;
            }
        });
    }

    addParenthesisListeners() {
        // Save object reference
        let _this = this; 

        // We add the listeners for the buttons representing the calculator's parenthesis
        document.getElementById("leftP").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += "(";
        });

        document.getElementById("rightP").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += ")";
        });
    }

    addPiListener() {
        // Save object reference
        let _this = this; 

        // We add the listeners for the buttons representing the calculator's PI number
        document.getElementById("pi").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            _this.resultTxtField.value += String(Math.PI);
        });
    }

    addModeListeners() {
        // Save object reference
        let _this = this; 

        // We add the listeners for the buttons representing the calculator's modes
        document.getElementById("degrees").addEventListener("click", function() {
            _this.mode = "DEG";
            document.getElementById("actualMode").innerHTML = "Mode: Degrees";
        });

        document.getElementById("radians").addEventListener("click", function() {
            _this.mode = "RAD";
            document.getElementById("actualMode").innerHTML = "Mode: Radians";
        });
    }

    toDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    toRadians(degree) {
        return degree * (Math.PI / 180);
    }
}


window.addEventListener("load", function() { 
    new ScientificCalculator();
});




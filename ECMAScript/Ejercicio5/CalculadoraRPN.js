"use strict";
class RPNCalculator {
    constructor() {
        // We store the result text field into a class attribute
        this.resultTxtField = document.getElementById("resTxt");
        this.resultTxtField.value = ""; // Restart the text field value
        this.calcStatus = "OK"; // Default status (OK, ERROR, EVALUATED)
        this.register = 0; // Memory register
        this.stack = []; // Stack of the calculator

        // Calculator mode
        this.mode = "DEG" // Can be DEG (Degrees) or RAD (Radians)

        // We add the button listeners
        this.addNumberListeners();
        this.addOperatorListeners();
        this.addRegisterListeners();
        this.addDotListener();
        this.addClearListener();
        this.addPushListener();
        this.addPiListener();
        this.addModeListeners();
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

    popItemFromStack() {
        let item = this.stack.pop();
        if (isNaN(item)) {
            return null;
        }
        if (this.checkInput(item) === true) {
            try {
                return item;
            } catch (e) {
                return null;
            }
        } else {
            return null;
        }
    }
    
    peekItemFromStack() {
        let item = this.stack[this.stack.length - 1];
        if (isNaN(item)) {
            return null;
        }
        if (this.checkInput(item) === true) {
            try {
                return item;
            } catch (e) {
                return null;
            }
        } else {
            return null;
        }
    }

    addOperatorListeners() {
        // Save object reference
        let _this = this;

        // We add the listeners for the buttons representing the calculator's operators
        document.getElementById("opDiv").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand2 = _this.popItemFromStack();
            let operand1 = _this.popItemFromStack();
            if (operand1 === null || operand2 === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                let result = operand1 / operand2;
                _this.resultTxtField.value = String(result);
            }
        });

        document.getElementById("opMul").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand2 = _this.popItemFromStack();
            let operand1 = _this.popItemFromStack();
            if (operand1 === null || operand2 === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                let result = operand1 * operand2;
                _this.resultTxtField.value = String(result);
            }
        });

        document.getElementById("opMinus").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand2 = _this.popItemFromStack();
            let operand1 = _this.popItemFromStack();
            if (operand1 === null || operand2 === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                let result = operand1 - operand2;
                _this.resultTxtField.value = String(result);
            }
        });

        document.getElementById("opPlus").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand2 = _this.popItemFromStack();
            let operand1 = _this.popItemFromStack();
            if (operand1 === null || operand2 === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                let result = operand1 + operand2;
                _this.resultTxtField.value = String(result);
            }
        });

        document.getElementById("opSquare").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand = _this.popItemFromStack();
            if (operand === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                _this.resultTxtField.value = String(Math.pow(operand, 2));
            }
        });

        document.getElementById("opPower").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand2 = _this.popItemFromStack();
            let operand1 = _this.popItemFromStack();
            if (operand1 === null || operand2 === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                let result = Math.pow(operand1, operand2);
                _this.resultTxtField.value = String(result);
            }
        });

        document.getElementById("opSin").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand = _this.popItemFromStack();
            if (operand === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                if (_this.mode === "DEG") {
                    _this.resultTxtField.value = String(Math.sin(_this.toRadians(operand)));
                } else {
                    _this.resultTxtField.value = String(Math.sin(operand));
                }
            }
        });

        document.getElementById("opCos").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand = _this.popItemFromStack();
            if (operand === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                if (_this.mode === "DEG") {
                    _this.resultTxtField.value = String(Math.cos(_this.toRadians(operand)));
                } else {
                    _this.resultTxtField.value = String(Math.cos(operand));
                }
            }
        });

        document.getElementById("opTan").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand = _this.popItemFromStack();
            if (operand === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                if (_this.mode === "DEG") {
                    _this.resultTxtField.value = String(Math.tan(_this.toRadians(operand)));
                } else {
                    _this.resultTxtField.value = String(Math.tan(operand));
                }
            }
        });

        document.getElementById("opSqrRoot").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand = _this.popItemFromStack();
            if (operand === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                _this.resultTxtField.value = String(Math.sqrt(operand));
            }
        });

        document.getElementById("opPowerTen").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand = _this.popItemFromStack();
            if (operand === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                _this.resultTxtField.value = String(Math.pow(10, operand));
            }
        });

        document.getElementById("opLog").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand = _this.popItemFromStack();
            if (operand === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                _this.resultTxtField.value = String(Math.log(operand));
            }
        });

        document.getElementById("opExp").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand2 = _this.popItemFromStack();
            let operand1 = _this.popItemFromStack();
            if (operand1 === null || operand2 === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                let result = operand1 * Math.pow(10, operand2);
                _this.resultTxtField.value = String(result);
            }
        });

        document.getElementById("opMod").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand2 = _this.popItemFromStack();
            let operand1 = _this.popItemFromStack();
            if (operand1 === null || operand2 === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                let result = operand1 % operand2;
                _this.resultTxtField.value = String(result);
            }
        });

        document.getElementById("opDel").addEventListener("click", function() {
            if (_this.resultTxtField.value !== null) {
                _this.resultTxtField.value = _this.resultTxtField.value.substring(0, _this.resultTxtField.value.length - 1);
            }
        });

        document.getElementById("opFactorial").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand = _this.popItemFromStack();
            if (operand === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                let f = _this.factorial(operand);
                _this.resultTxtField.value = String(f);
            }
        });

        document.getElementById("opSign").addEventListener("click", function() {
            _this.checkStatus(); // We check the status of the calculator
            let operand = _this.popItemFromStack();
            if (operand === null) {
                _this.resultTxtField.value = "INVALID SYNTAX";
                _this.calcStatus = "ERROR"; // Calculator status changes to ERROR
            } else {
                let result = - operand;
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
            let item = _this.peekItemFromStack();
            if (item === null) {
                return;
            } else {
                _this.register = eval(_this.register + "-" + String(item));
            }
        });

        document.getElementById("mplus").addEventListener("click", function() {
            let item = _this.peekItemFromStack();
            if (item === null) {
                return;
            } else {
                _this.register = eval(_this.register + "+" + String(item));
            }
        });

        document.getElementById("ms").addEventListener("click", function() {
            let item = _this.peekItemFromStack();
            if (item === null) {
                return;
            } else {
                _this.register = String(item);
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
            _this.stack = [];
        });
    }

    addPushListener() {
        // Save object reference
        let _this = this;

        document.getElementById("push").addEventListener("click", function() {
            if (_this.resultTxtField.value === null) {
                return;
            }
            if (_this.checkInput(_this.resultTxtField.value) === true) {
                try {
                    _this.stack.push(parseFloat(_this.resultTxtField.value));
                    _this.calcStatus = "EVALUATED";
                    _this.resultTxtField.value = "";
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

    checkStatus() {
        // If previous execution caused an error
        if (this.calcStatus === "ERROR") {
            this.resultTxtField.value = ""; // Restart txt field
            this.calcStatus = "OK";
            this.stack = [];
        } else if (this.calcStatus === "EVALUATED") {
            this.resultTxtField.value = ""; // Restart txt field
            this.calcStatus = "OK";
        }
    }

    checkInput(input) {
        return /^-?[0-9]+(.[0-9]+)*((\+|\-|\*|\/)-?[0-9]+(.[0-9]+)*)*$/.test(input);
    }
}


window.addEventListener("load", function() { 
    new RPNCalculator();
});




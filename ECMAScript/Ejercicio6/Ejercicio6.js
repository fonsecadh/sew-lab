"use strict";
class DiceThrower {
    constructor() {
        this.dice = 0;
        this.result = 0;

        this.addThrowListener();
    }

    addThrowListener() {
        // Save object reference
        let _this = this;

        document.getElementById("throw").addEventListener("click", function() {
            let diceSelector = document.getElementById("dice");
            _this.dice = parseInt(diceSelector.options[diceSelector.selectedIndex].value);
            _this.throwDice(_this.dice);
        });
    }

    throwDice(dice) {
        let max = parseInt(dice);
        let min = 1;

        min = Math.ceil(0);
        max = Math.floor(max);
        let result = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("result").innerHTML = String(result);
    }
}

window.addEventListener("load", function() { 
    new DiceThrower();
});




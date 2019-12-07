"use strict";
class CurrencyConverter {
    constructor() {
        this.clearTextFields();
        this.loadComboBoxes();
        this.addBtnListener();
    }
    clearTextFields() {
        $("#inputID").val(0);
        $("#outputID").val(0);
    }
    loadComboBoxes() {
        $(document).ready(function () {
            let apiKey = "5711617e09a0eda074eda9afd34f0c87";
            $.getJSON("http://data.fixer.io/api/symbols?access_key=" + apiKey, function(jsonData) {
                let d = jsonData;
                for (var s in d.symbols) {
                    if (s === "EUR") {
                        // Load combo boxes for the base currency
                        let item = "<option value=" + s + ">" + d.symbols[s.toString()] + "</option>";
                        $("#actual").append(item);
                    } else if (s === "USD" || s === "CAD" || s === "ALL" || s === "JPY") {
                        // Load combo boxes for the currency to be changed
                        let item = "<option value=" + s + ">" + d.symbols[s.toString()] + "</option>";
                        $("#toChange").append(item);
                    }
                }
            });
        });
    }
    addBtnListener() {
        let _this = this;
        $(document).ready(function () {
            $("#btnConvert").click(function() {
                let actualCurrencySymbol = $("#actual option:selected").val();
                let toChangeCurrencySymbol = $("#toChange option:selected").val();
                let amount = $("#inputID").val();
                _this.convertCurrency(amount, actualCurrencySymbol, toChangeCurrencySymbol);
            });
        });
    }
    convertCurrency(amount, actual, toChange) {
        $(document).ready(function () {
            let apiKey = "5711617e09a0eda074eda9afd34f0c87";
            $.getJSON("http://data.fixer.io/api/latest?access_key=" + apiKey + "&base=" + actual + "&symbols=" + toChange, function(jsonData) {
                let d = jsonData;
                let result = amount * d.rates[toChange.toString()];
                $("#outputID").val(result);
            });
        });
    }
}

window.addEventListener("load", function() {
    new CurrencyConverter();
});

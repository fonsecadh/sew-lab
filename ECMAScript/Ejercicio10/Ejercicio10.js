"use strict";
class CurrencyConverter {
    constructor() {
        this.loadComboBoxes();
        this.addBtnListener();
    }
    loadComboBoxes() {
        $(document).ready(function () {
            let apiKey = "";
            // TODO: Load only five currencies (Including Euro)
            $.getJSON("https://data.fixer.io/api/symbols?access_key=" + apiKey, function(jsonData) {
                let d = jsonData;
                for (var s in d.symbols) {
                    // Load combo boxes
                    let item = "<option value=" + d.symbols[s.toString()] + ">" + s + "</option>;
                    $("#actual").append(item);
                    $("#toChange").append(item);
                }
            });
        });
    }
    addBtnListener() {
        $(document).ready(function () {
            $("#btnConvert").click(function() {
                $("#inputID").val(0);
                $("#outputID").val(0);
                let actualCurrencySymbol = $("#actual option:selected").val();
                let toChangeCurrencySymbol = $("#toChange option:selected").val();
                let amount = $("#inputID").val();
                $("#outputID").val(this.convertCurrency(amount, actualCurrencySymbol, toChangeCurrencySymbol));
            });
        });
    }
    convertCurrency(amount, actual, toChange) {
        $(document).ready(function () {
            let apiKey = "";
            $.getJSON("https://data.fixer.io/api/latest?access_key=" + apiKey + "&from=" + actual + "&to=" + toChange + "&amount=" + amount, function(jsonData) {
                let d = jsonData;
                return d.result;
            });
        });
    }
}

window.addEventListener("load", function() {
    new CurrencyConverter();
});

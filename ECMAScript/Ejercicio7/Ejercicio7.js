"use strict";
class DocumentModifier {
    constructor() {
        this.hideHeader1();
        this.hideHeader2();
        this.hideHeader3();
        this.showHeader1();
        this.showHeader2();
        this.showHeader3();
        this.hideParagraphs();
        this.showParagraphs();
        this.hideTable();
        this.showTable();
        this.hideList();
        this.showList();
        this.defaultValues();
        this.modifyHeader1();
        this.modifyHeader3();
        this.modifyFirstPara();
        this.addParagraph();
        this.addTable();
        this.addRowsToPracticesTable();
        this.removeLastPara();
        this.removeFirstPara();
        this.removeLastTable();
        this.removeFirstTable();
        this.removeLastPrTableRow();
    }

    // Showing and hiding elements

    hideHeader(hNum) {
        if (hNum > 0 && hNum <= 6) {
            $(document).ready(function () {
                $("#btnHideHeader" + hNum).click(function() {
                    $("h" + hNum).hide();
                });
            });
        }
    }

    showHeader(hNum) {
        if (hNum > 0 && hNum <= 6) {
            $(document).ready(function () {
                $("#btnShowHeader" + hNum).click(function() {
                    $("h" + hNum).show();
                });
            });
        }
    }

    hideHeader1() {
        this.hideHeader(1);
    }

    showHeader1() {
        this.showHeader(1);
    }

    hideHeader2() {
        this.hideHeader(2);
    }

    showHeader2() {
        this.showHeader(2);
    }

    hideHeader3() {
        this.hideHeader(3);
    }

    showHeader3() {
        this.showHeader(3);
    }

    hideParagraphs() {
        $(document).ready(function () {
            $("#btnHidePara").click(function() {
                $("p").hide();
            });
        });
    }

    showParagraphs() {
        $(document).ready(function () {
            $("#btnShowPara").click(function() {
                $("p").show();
            });
        });
    }

    hideTable() {
        $(document).ready(function () {
            $("#btnHideTable").click(function() {
                $("table").hide();
            });
        });
    }

    showTable() {
        $(document).ready(function () {
            $("#btnShowTable").click(function() {
                $("table").show();
            });
        });
    }

    hideList() {
        $(document).ready(function () {
            $("#btnHideList").click(function() {
                $("ul").hide();
            });
        });
    }

    showList() {
        $(document).ready(function () {
            $("#btnShowList").click(function() {
                $("ul").show();
            });
        });
    }


    // Modifying elements

    defaultValues() {
        $(document).ready(function() {
            $("#btnDefaultValues").click(function() {
                $("h1").text("ECMAScript: Ejercicio 7");
                $("h3").text("Software y Estándares para la Web");
                $("p:first").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi risus, scelerisque ac faucibus sit amet, malesuada id nulla. In vestibulum ex ut rutrum consequat. Donec cursus, massa vitae venenatis rhoncus, ex dolor maximus lorem, vitae commodo diam quam ut libero. Phasellus egestas nibh et odio tristique pharetra. Ut dictum euismod lorem. Quisque facilisis elit id nisi pellentesque, a viverra magna bibendum. Quisque eget iaculis arcu. Donec bibendum arcu lectus, pulvinar tristique nunc faucibus et. Praesent velit neque, accumsan sed ligula at, imperdiet gravida nunc.");
            });
        });
    }

    modifyHeader1() {
        $(document).ready(function() {
            $("#btnModH1").click(function() {
                $("h1").text("Se ha cambiado el primer nivel de cabecera");
            });
        });
    }

    modifyHeader3() {
        $(document).ready(function() {
            $("#btnModH3").click(function() {
                $("h3").text("Se ha cambiado el tercer nivel de cabecera");
            });
        });
    }

    modifyFirstPara() {
        $(document).ready(function() {
            $("#btnModFstPara").click(function() {
                $("p:first").text("Se ha cambiado el primer párrafo.");
            });
        });
    }


    // Add elements
    
    addParagraph() {
        $(document).ready(function() {
            $("#btnAddPara").click(function() {
                $("p:last").after("<p>Añadido nuevo párrafo.</p>");
            });
        });
    }

    addTable() {
        $(document).ready(function() {
            $("#btnAddTable").click(function() {
                $("table:last").after("<table><tr><th>Header1</th><th>Header2</th></tr><thead></thead><tbody><tr><td>Data1</td><td>Data2</td></tr><tr><td>Data1</td><td>Data2</td></tr><tr><td>Data1</td><td>Data2</td></tr></tbody></table>");
            });
        });
    }

    addRowsToPracticesTable() {
        $(document).ready(function() {
            $("#btnAddRowsPrTable").click(function() {
                $("#practices tbody tr:last").after("<tr><td>Data1</td><td>Data2</td></tr>");
            });
        });
    }


    // Remove elements

    removeLastPara() {
        $(document).ready(function() {
            $("#btnRemLstPara").click(function() {
                $("p:last").remove();
            });
        });
    }

    removeFirstPara() {
        $(document).ready(function() {
            $("#btnRemFstPara").click(function() {
                $("p:first").remove();
            });
        });
    }

    removeLastTable() {
        $(document).ready(function() {
            $("#btnRemLstTable").click(function() {
                $("table:last").remove();
            });
        });
    }

    removeFirstTable() {
        $(document).ready(function() {
            $("#btnRemFstTable").click(function() {
                $("table:first").remove();
            });
        });
    }

    removeLastPrTableRow() {
        $(document).ready(function() {
            $("#btnRemLstPrTableRow").click(function() {
                $("#practices tbody tr:last").remove();
            });
        });
    }
}

window.addEventListener("load", function() { 
    new DocumentModifier();
});


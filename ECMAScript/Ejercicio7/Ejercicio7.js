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

    // TODO: Rest of exercise 7
}

window.addEventListener("load", function() { 
    new DocumentModifier();
});


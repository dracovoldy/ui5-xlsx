sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "project1/lib/thirdparty/xlsx/xlsx"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                console.log("I'm here");
                debugger;

                let nulls = [null, null, null, null, null, null, null, null, null, null, null, null]
                /* generate workbook object */
                let ws = XLSX.utils.aoa_to_sheet([
                    ['My Company', ...nulls],
                    ["Depreciation and Amortization Report", ...nulls],
                    [...nulls],
                    ["Line No.", ...nulls],
                    [...nulls],
                    ["2", "Total Cost of Section 179 property place in service", ...nulls]
                ], {
                    dense: true,
                    origin: "B2"
                });
                let wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "Data");

                /* generate buffer */
                // let buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

                console.log(wb);

                XLSX.writeFile(wb, "SheetJSESMTest.xlsx");
            }
        });
    });

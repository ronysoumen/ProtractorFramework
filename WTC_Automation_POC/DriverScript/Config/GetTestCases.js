"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ExcelData = /** @class */ (function () {
    function ExcelData() {
    }
    /********************************************************************************************************
        * Function Name: setData
        * About:It will set sheet name and test id dynamically
        * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    ExcelData.setData = function (sheet, testid) {
        ExcelData.globalsheetname = sheet;
        ExcelData.globaltestid = testid;
    };
    /********************************************************************************************************
        * Specification Name: getTestcase
        * About:This will return all test cases which are set as 'Y' in 'Testcases.xlsx' sheet
        * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
      *******************************************************************************************************/
    ExcelData.getTestcase = function () {
        var XLSX = require('xlsx');
        var testids = [];
        var workbook = XLSX.readFile(protractor_1.browser.params.datasheetpath);
        var worksheet = workbook.Sheets["TestCases"];
        var excelToJSON = XLSX.utils.sheet_to_json(worksheet);
        excelToJSON.forEach(function (element) {
            if (element.TestRun === 'Y') {
                testids.push(element.TestCasesID);
            }
        });
        return testids;
    };
    /********************************************************************************************************
        * Function Name: getActions
        * About:This will return all actions, test data sheet and test data id related particular test case
        * Developed By: Soumen Saha     Created Date:09/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    ExcelData.getActions = function (TestTab) {
        var XLSX = require('xlsx');
        var testActionswithData = [];
        var workbook = XLSX.readFile(protractor_1.browser.params.datasheetpath);
        var worksheet = workbook.Sheets[TestTab];
        var excelToJSON = XLSX.utils.sheet_to_json(worksheet);
        excelToJSON.forEach(function (element) {
            testActionswithData.push([element.Actions, element.TestDataSheet, element.TestDataID]);
        });
        return testActionswithData;
    };
    /********************************************************************************************************
        * Function Name: getValuesLatest
        * About:It will return test data value from data.xlsx based on test data sheet and test data id
        * Developed By: Soumen Saha     Created Date:10/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    ExcelData.getValuesLatest = function (column) {
        var XLSX = require('XLSX');
        var value = "";
        var workbooks = XLSX.readFile(protractor_1.browser.params.testdata);
        var sheetv = workbooks.Sheets[ExcelData.globalsheetname];
        var excelToJSON = XLSX.utils.sheet_to_json(sheetv);
        excelToJSON.forEach(function (element) {
            if (element.TC == ExcelData.globaltestid) {
                value = element[column];
            }
        });
        return value;
    };
    return ExcelData;
}());
exports.ExcelData = ExcelData;

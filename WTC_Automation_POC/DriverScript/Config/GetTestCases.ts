import { browser } from 'protractor';

export class ExcelData {

    static globalsheetname: string;
    static globaltestid: string;

/********************************************************************************************************
    * Function Name: setData
    * About:It will set sheet name and test id dynamically
    * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/

    static setData(sheet: any, testid: any): any {
    ExcelData.globalsheetname = sheet;
    ExcelData.globaltestid = testid;
}

/********************************************************************************************************
    * Specification Name: getTestcase
    * About:This will return all test cases which are set as 'Y' in 'Testcases.xlsx' sheet
    * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
  *******************************************************************************************************/

static getTestcase(): any 
    {
        let XLSX = require('xlsx');
        let testids: any[] = [];
        let workbook = XLSX.readFile(browser.params.datasheetpath);
        let worksheet = workbook.Sheets["TestCases"];
        let excelToJSON = XLSX.utils.sheet_to_json(worksheet);
        excelToJSON.forEach((element: any) => 
        {
            if (element.TestRun === 'Y') 
            {
                testids.push(element.TestCasesID);
            }
        });
        return testids;
    }

/********************************************************************************************************
    * Function Name: getActions
    * About:This will return all actions, test data sheet and test data id related particular test case
    * Developed By: Soumen Saha     Created Date:09/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/

static getActions(TestTab:any):any{
    let XLSX = require('xlsx');
    let testActionswithData:any[]=[];
    let workbook = XLSX.readFile(browser.params.datasheetpath);
    let worksheet = workbook.Sheets[TestTab];
    let excelToJSON = XLSX.utils.sheet_to_json(worksheet);
    
    excelToJSON.forEach((element: any) => 
    {
       testActionswithData.push([element.Actions,element.TestDataSheet,element.TestDataID]);
    });
    return testActionswithData;
}

/********************************************************************************************************
    * Function Name: getValuesLatest
    * About:It will return test data value from data.xlsx based on test data sheet and test data id
    * Developed By: Soumen Saha     Created Date:10/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/

static getValuesLatest(column:any){
        let XLSX = require('XLSX');
        let value = "";
        let workbooks = XLSX.readFile(browser.params.testdata);
        let sheetv = workbooks.Sheets[ExcelData.globalsheetname];
        let excelToJSON = XLSX.utils.sheet_to_json(sheetv);
        excelToJSON.forEach((element: any) => {
            if (element.TC == ExcelData.globaltestid) {
                value = element[column];
            }
        });
     return value;
    }
}
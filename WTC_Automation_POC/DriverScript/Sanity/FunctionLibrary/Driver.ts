/********************************************************************************************************
    * Specification Name: NSwebSpecFile
    * About:Code execution will start from this file, It will run keyword based on test cases set in excel sheet
    * Developed By: Poorvaja Deshmukh     Created Date:19/5/2020       Last Modified: Poorvaja Deshmukh
  *******************************************************************************************************/

import { protractor, element, browser } from 'protractor';
import { Keyword } from './CommonFunction/Keywords';
//import {ExcelData} from '../../Config/GetTestCases';
import {ExcelData} from '../../Config/GetTestCases';
import {ReusableFunctions} from './CommonFunction/Reusables';

let Tests:Array<string>;
Tests = ExcelData.getTestcase();
for (var k = 0; k < Tests.length; k++){
let TestRun = Tests[k];

describe(TestRun, function () {
  let actions: Array<string>;
  actions = ExcelData.getActions(TestRun);
  for (var i = 0; i < actions.length; i++) {
    let keyword = actions[i][0];
    let datsheet = actions[i][1];
    let ID = actions[i][2];

    if (ExcelData.getTestcase().indexOf(TestRun) > -1) {
      it(keyword, async () => {
        try{
            await Keyword.fn_Execute(keyword,datsheet,ID);
            }
        catch(e)
            {console.log(e)};
      });

/********************************************************************************************************
    * Function Name: afterEach
    * About:It will record browser log after each keyword execution
    * Note: This supports chrome execution only (recommened to comment out for other browser)
    * Developed By: Soumen Saha     Created Date:15/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/
      afterEach(async()=>{
        // await ReusableFunctions.browserlog();
      });
    }
  } 
});
}
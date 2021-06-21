import { protractor, element, browser } from 'protractor';
import { Login } from '../Pages/LoginPage';
import { ExcelData } from '../../../Config/GetTestCases';
import { NavigatetoCompanies } from '../Pages/HomePage';
import { SearchCompany } from '../Pages/SearchCompanyPage';
import { Company } from '../Pages/CompanyPage';

export class Keyword {
  /********************************************************************************************************
      * Function Name: fn_Execute
      * About:This will execute keywords provided
      * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Poorvaja Deshmukh
  *******************************************************************************************************/

  static async fn_Execute(keywrd: any, datsheet: any, ID: any) {
    ExcelData.setData(datsheet, ID);
    switch (keywrd) {
      case 'Login':
        await Login.login();
        break;
      case "Logout":
        browser.sleep(3000);
        await Login.logout();
        break;         
    }
  }
}
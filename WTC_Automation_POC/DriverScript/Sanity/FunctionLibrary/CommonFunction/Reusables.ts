import { browser, by, element, $, ElementFinder, EventEmitter } from 'protractor';
import { protractor } from 'protractor';
var EC = protractor.ExpectedConditions;
import { logger } from '../../../Config/Logger';


export class ReusableFunctions
{
/********************************************************************************************************
    * Function Name: ExplicitwaitNClick
    * About: Function is used to click on element which is passed in argument
    * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/

  static async ExplicitwaitNClick(Elem:ElementFinder)
  {
    {
      try
      {
        await logger.Log().info("Waiting for element "+Elem.locator());
        await browser.wait(EC.elementToBeClickable(Elem),30000);
        await logger.Log().info("Element " +Elem.locator()+ " is found to be clickable");
        await browser.sleep(3000);
        await Elem.click();
        await logger.Log().info("Element " +Elem.locator()+ "is clicked");
     }
     catch(e)
     {
       await logger.Log().error("error occured clicking"+e);
       console.log(e);
     }
    }
  };

/********************************************************************************************************
    * Function Name: ExplicitwaitNSendKeys
    * About:This will be used to enter data in element provided
    * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
  *******************************************************************************************************/

  static async ExplicitwaitNSendKeys(Elem:ElementFinder,txt:any)
  {
    {
      try
      {
        await logger.Log().info("Waiting for element "+Elem.locator());
        await browser.wait(EC.elementToBeClickable(Elem),30000);
        await logger.Log().info("Element " +Elem.locator()+ " is found to be clickable");
        await browser.sleep(2000);
        await Elem.sendKeys(txt);
        await logger.Log().info("Entered "+txt+" at "+Elem.locator());
      }
      catch(e)
      {
        await logger.Log().error("error occured entering "+e);
      }
    }
  };
/********************************************************************************************************
    * Function Name: selectDropdownbyName
    * About: Function is used to handel dropdown 
    * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/
  static async selectDropdownbyName(dropdownbutton:ElementFinder,selectOption:ElementFinder)
  {    
    try
    {  
     
    await logger.Log().info("Waiting for element "+dropdownbutton.locator());
    await browser.wait(EC.elementToBeClickable(dropdownbutton),22000);
    await dropdownbutton.click();
    await logger.Log().info("Element " +dropdownbutton.locator()+ "is clicked");
    await logger.Log().info("Waiting for element "+selectOption.locator());
    await browser.wait(EC.elementToBeClickable(selectOption),22000);
    await selectOption.click();
    await logger.Log().info("Element " +selectOption.locator()+ "is clicked");
    }
    catch(e)
    {
    logger.Log().error("Error in dropdown selection");
    }
  };

/********************************************************************************************************
    * Function Name: GetText
    * About:This will be used to return text of element provided
    * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
*******************************************************************************************************/

  static async GetText(Elem:ElementFinder)
  {
    await logger.Log().info("Waiting for element "+Elem.locator());
    await browser.wait(EC.visibilityOf(Elem),30000);
    return Elem.getText();
  };

/********************************************************************************************************
    * Function Name: CompareScreenshot
    * About:This will compare screenshot of current page with screenshot provided in workspace folder
    * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
*******************************************************************************************************/

   static async CompareScreenshot()
   {
      const screensnap = await browser.screenshotExtension.checkPageScreenshot('screensnap');
      //const elementsnap = browser.screenshotExtension.checkElementScreenshot(element(elem),'fullpage');
      await expect(screensnap).toEqual(0);
   };

/********************************************************************************************************
    * Function Name: Validate
    * About: It will assert expected and actual value
    * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/

  static async Validate(Elem:ElementFinder,Actual:any,Expected:any) 
  {
    await this.HighlightElement(Elem);
    let flag:boolean=false;
    if(Actual===Expected)
      {
      flag=true;
      logger.Log().info("Actual:"+Actual+" and Expected:"+Expected+"does match");
      }
    else{
      try{
          if(expect(Actual).toEqual(Expected)){}
          else{throw new Error("Actual:"+Actual+" and Expected:"+Expected+"doesnot match");}}
    catch(e){
    logger.Log().error('Error',e); }
        }
  };  

  static async tabout()
  {
    await browser.actions().sendKeys(protractor.Key.TAB).perform();
  };

/********************************************************************************************************
    * Function Name: HighlightElement
    * About:This will highlight provided element
    * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
*******************************************************************************************************/

  static async HighlightElement(el:ElementFinder){
      console.log("highlight--");
      console.log("locator---:"+el.locator());
      return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el.getWebElement(), "color: Red; border: 2px solid red;").
      then(function(resp){
        browser.sleep(2000);
        return el;
      },function(err){
        console.log("error is :"+err);
      });
    };
/********************************************************************************************************
    * Function Name: Enterkey
    * About: This will be used to enter keyboard key
    * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/
  static async Enterkey(){
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  };

/********************************************************************************************************
    * Function Name: isDisplayed
    * About:This will return true or false value based on provided element visibility
    * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
*******************************************************************************************************/

  static async isDisplayed(elem:ElementFinder)
  {
   try{
    if(elem.isDisplayed()){
      logger.Log().info("Element"+elem.locator()+"is displayed");
      return true;
    }
    else{
      logger.Log().info("Element"+elem.locator()+"is not displayed");
      return false;
    }
  }
  catch(e){
    logger.Log().error(e);
  }
  };
/********************************************************************************************************
    * Function Name: browserlog
    * About: It is used to log server side log
    * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/
  static async browserlog()
  {
      browser.manage().logs().get('browser').then(function (browserLogs){
        browserLogs.forEach(function (log){
         logger.Log().info("-----------------------");
         logger.Log().info(log.message);
        });
    });
  }


 /********************************************************************************************************
    * Function Name: isEnabled
    * About:This will return true or false value based on provided element visibility
    * Developed By: Tejas Patil    Created Date:07/08/2020       Last Modified:  
*******************************************************************************************************/
 
static async isEnabled(elem:ElementFinder)
{
 try{
  if(elem.isEnabled()){
    logger.Log().info("Element"+elem.locator()+"is enabled");
    return true;
  }
  else{
    logger.Log().info("Element"+elem.locator()+"is not enabled");
    return false;
  }
}
catch(e){
  logger.Log().error(e);
}
}



/********************************************************************************************************
  * Function Name: selectDropdownbyName
  * About: Function is used to handel dropdown 
  * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha 
*******************************************************************************************************/

static async  verifyDropdownValues(dropdownbutton:any,listofelements:any,expectelistSeparated:any){
  var st = expectelistSeparated.split(';');
  await ReusableFunctions.ExplicitwaitNClick(dropdownbutton);
  element.all(listofelements).then(function (items) {
      for (var i = 0; i < items.length; i++) {
          expect(st).toContain(items[i].getText())
      }
  });
  await ReusableFunctions.ExplicitwaitNClick(dropdownbutton);


}
static dropdownbutton(dropdownbutton: any) {
  throw new Error("Method not implemented.");
}

static async SearchFilter(filterDropdown:any,selectdropsown:any){
  await browser.sleep(6000);
  await browser.refresh();
  var btnSearchsaveSearchPlus=element(by.xpath("//i[@class='fa fa-plus']"));
  var  btnRun=element(by.xpath("(//button[contains(text(),' Run ')])[2]"));
  var btnSearchsaveAddFilter=element(by.xpath("//i[@class='fa fa-plus green']"));

  await ReusableFunctions.ExplicitwaitNClick(btnSearchsaveSearchPlus);
  await ReusableFunctions.ExplicitwaitNClick(btnSearchsaveAddFilter);
  await ReusableFunctions.selectDropdownbyName(filterDropdown,selectdropsown);
  await ReusableFunctions.ExplicitwaitNClick(btnRun);

}

static async SearchFilterbyName(filterTxtbox:any,strValue:any){
  await browser.refresh();
  await browser.sleep(6000);
  var btnSearchsaveSearchPlus=element(by.xpath("//i[@class='fa fa-plus']"));
  var  btnRun=element(by.xpath("(//button[contains(text(),' Run ')])[2]"));
  var btnSearchsaveAddFilter=element(by.xpath("//i[@class='fa fa-plus green']"));
  var clearDefaultCriteria=element(by.xpath("(//div[@class='ui-igcombo-clearicon ui-icon-circle-close ui-icon'])[1]"));
  await ReusableFunctions.ExplicitwaitNClick(btnSearchsaveSearchPlus);
  await ReusableFunctions.ExplicitwaitNClick(btnSearchsaveAddFilter);
  await ReusableFunctions.ExplicitwaitNClick(clearDefaultCriteria);
  await ReusableFunctions.ExplicitwaitNSendKeys(filterTxtbox,strValue);
  await ReusableFunctions.ExplicitwaitNClick(btnRun);

}


}
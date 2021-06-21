export class logger{

/********************************************************************************************************
    * Function Name: Log
    * About:This will be used to add execution logs
    * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha
*******************************************************************************************************/
    static Log(): any {
        try{
        var log4js = require('log4js');
        log4js.configure('DriverScript/Config/log4js.json');
        let log = log4js.getLogger("NS-WEB");
        return log;
        }
        catch(e){
        }
    }
}
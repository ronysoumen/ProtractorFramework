"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = /** @class */ (function () {
    function logger() {
    }
    /********************************************************************************************************
        * Function Name: Log
        * About:This will be used to add execution logs
        * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    logger.Log = function () {
        try {
            var log4js = require('log4js');
            log4js.configure('DriverScript/Config/log4js.json');
            var log = log4js.getLogger("NS-WEB");
            return log;
        }
        catch (e) {
        }
    };
    return logger;
}());
exports.logger = logger;

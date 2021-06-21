"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var protractor_2 = require("protractor");
var EC = protractor_2.protractor.ExpectedConditions;
var Logger_1 = require("../../../Config/Logger");
var ReusableFunctions = /** @class */ (function () {
    function ReusableFunctions() {
    }
    /********************************************************************************************************
        * Function Name: ExplicitwaitNClick
        * About: Function is used to click on element which is passed in argument
        * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    ReusableFunctions.ExplicitwaitNClick = function (Elem) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 9]);
                        return [4 /*yield*/, Logger_1.logger.Log().info("Waiting for element " + Elem.locator())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(Elem), 30000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Logger_1.logger.Log().info("Element " + Elem.locator() + " is found to be clickable")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, Elem.click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, Logger_1.logger.Log().info("Element " + Elem.locator() + "is clicked")];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        e_1 = _a.sent();
                        return [4 /*yield*/, Logger_1.logger.Log().error("error occured clicking" + e_1)];
                    case 8:
                        _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ;
    /********************************************************************************************************
        * Function Name: ExplicitwaitNSendKeys
        * About:This will be used to enter data in element provided
        * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
      *******************************************************************************************************/
    ReusableFunctions.ExplicitwaitNSendKeys = function (Elem, txt) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 9]);
                        return [4 /*yield*/, Logger_1.logger.Log().info("Waiting for element " + Elem.locator())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(Elem), 30000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Logger_1.logger.Log().info("Element " + Elem.locator() + " is found to be clickable")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, Elem.sendKeys(txt)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, Logger_1.logger.Log().info("Entered " + txt + " at " + Elem.locator())];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        e_2 = _a.sent();
                        return [4 /*yield*/, Logger_1.logger.Log().error("error occured entering " + e_2)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ;
    /********************************************************************************************************
        * Function Name: selectDropdownbyName
        * About: Function is used to handel dropdown
        * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    ReusableFunctions.selectDropdownbyName = function (dropdownbutton, selectOption) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, Logger_1.logger.Log().info("Waiting for element " + dropdownbutton.locator())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(dropdownbutton), 22000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, dropdownbutton.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, Logger_1.logger.Log().info("Element " + dropdownbutton.locator() + "is clicked")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, Logger_1.logger.Log().info("Waiting for element " + selectOption.locator())];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(selectOption), 22000)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, selectOption.click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, Logger_1.logger.Log().info("Element " + selectOption.locator() + "is clicked")];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        e_3 = _a.sent();
                        Logger_1.logger.Log().error("Error in dropdown selection");
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ;
    /********************************************************************************************************
        * Function Name: GetText
        * About:This will be used to return text of element provided
        * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
    *******************************************************************************************************/
    ReusableFunctions.GetText = function (Elem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Logger_1.logger.Log().info("Waiting for element " + Elem.locator())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(EC.visibilityOf(Elem), 30000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Elem.getText()];
                }
            });
        });
    };
    ;
    /********************************************************************************************************
        * Function Name: CompareScreenshot
        * About:This will compare screenshot of current page with screenshot provided in workspace folder
        * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
    *******************************************************************************************************/
    ReusableFunctions.CompareScreenshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var screensnap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.screenshotExtension.checkPageScreenshot('screensnap')];
                    case 1:
                        screensnap = _a.sent();
                        //const elementsnap = browser.screenshotExtension.checkElementScreenshot(element(elem),'fullpage');
                        return [4 /*yield*/, expect(screensnap).toEqual(0)];
                    case 2:
                        //const elementsnap = browser.screenshotExtension.checkElementScreenshot(element(elem),'fullpage');
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /********************************************************************************************************
        * Function Name: Validate
        * About: It will assert expected and actual value
        * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    ReusableFunctions.Validate = function (Elem, Actual, Expected) {
        return __awaiter(this, void 0, void 0, function () {
            var flag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.HighlightElement(Elem)];
                    case 1:
                        _a.sent();
                        flag = false;
                        if (Actual === Expected) {
                            flag = true;
                            Logger_1.logger.Log().info("Actual:" + Actual + " and Expected:" + Expected + "does match");
                        }
                        else {
                            try {
                                if (expect(Actual).toEqual(Expected)) { }
                                else {
                                    throw new Error("Actual:" + Actual + " and Expected:" + Expected + "doesnot match");
                                }
                            }
                            catch (e) {
                                Logger_1.logger.Log().error('Error', e);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    ReusableFunctions.tabout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_2.protractor.Key.TAB).perform()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /********************************************************************************************************
        * Function Name: HighlightElement
        * About:This will highlight provided element
        * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
    *******************************************************************************************************/
    ReusableFunctions.HighlightElement = function (el) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("highlight--");
                console.log("locator---:" + el.locator());
                return [2 /*return*/, protractor_1.browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);", el.getWebElement(), "color: Red; border: 2px solid red;").
                        then(function (resp) {
                        protractor_1.browser.sleep(2000);
                        return el;
                    }, function (err) {
                        console.log("error is :" + err);
                    })];
            });
        });
    };
    ;
    /********************************************************************************************************
        * Function Name: Enterkey
        * About: This will be used to enter keyboard key
        * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    ReusableFunctions.Enterkey = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_2.protractor.Key.ENTER).perform()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /********************************************************************************************************
        * Function Name: isDisplayed
        * About:This will return true or false value based on provided element visibility
        * Developed By: Poorvaja Deshmukh     Created Date:10/5/2020       Last Modified: Poorvaja Deshmukh
    *******************************************************************************************************/
    ReusableFunctions.isDisplayed = function (elem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (elem.isDisplayed()) {
                        Logger_1.logger.Log().info("Element" + elem.locator() + "is displayed");
                        return [2 /*return*/, true];
                    }
                    else {
                        Logger_1.logger.Log().info("Element" + elem.locator() + "is not displayed");
                        return [2 /*return*/, false];
                    }
                }
                catch (e) {
                    Logger_1.logger.Log().error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    ;
    /********************************************************************************************************
        * Function Name: browserlog
        * About: It is used to log server side log
        * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    ReusableFunctions.browserlog = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                protractor_1.browser.manage().logs().get('browser').then(function (browserLogs) {
                    browserLogs.forEach(function (log) {
                        Logger_1.logger.Log().info("-----------------------");
                        Logger_1.logger.Log().info(log.message);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    /********************************************************************************************************
       * Function Name: isEnabled
       * About:This will return true or false value based on provided element visibility
       * Developed By: Tejas Patil    Created Date:07/08/2020       Last Modified:
   *******************************************************************************************************/
    ReusableFunctions.isEnabled = function (elem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (elem.isEnabled()) {
                        Logger_1.logger.Log().info("Element" + elem.locator() + "is enabled");
                        return [2 /*return*/, true];
                    }
                    else {
                        Logger_1.logger.Log().info("Element" + elem.locator() + "is not enabled");
                        return [2 /*return*/, false];
                    }
                }
                catch (e) {
                    Logger_1.logger.Log().error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    /********************************************************************************************************
      * Function Name: selectDropdownbyName
      * About: Function is used to handel dropdown
      * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Soumen Saha
    *******************************************************************************************************/
    ReusableFunctions.verifyDropdownValues = function (dropdownbutton, listofelements, expectelistSeparated) {
        return __awaiter(this, void 0, void 0, function () {
            var st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        st = expectelistSeparated.split(';');
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNClick(dropdownbutton)];
                    case 1:
                        _a.sent();
                        protractor_1.element.all(listofelements).then(function (items) {
                            for (var i = 0; i < items.length; i++) {
                                expect(st).toContain(items[i].getText());
                            }
                        });
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNClick(dropdownbutton)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReusableFunctions.dropdownbutton = function (dropdownbutton) {
        throw new Error("Method not implemented.");
    };
    ReusableFunctions.SearchFilter = function (filterDropdown, selectdropsown) {
        return __awaiter(this, void 0, void 0, function () {
            var btnSearchsaveSearchPlus, btnRun, btnSearchsaveAddFilter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(6000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.refresh()];
                    case 2:
                        _a.sent();
                        btnSearchsaveSearchPlus = protractor_1.element(protractor_1.by.xpath("//i[@class='fa fa-plus']"));
                        btnRun = protractor_1.element(protractor_1.by.xpath("(//button[contains(text(),' Run ')])[2]"));
                        btnSearchsaveAddFilter = protractor_1.element(protractor_1.by.xpath("//i[@class='fa fa-plus green']"));
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNClick(btnSearchsaveSearchPlus)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNClick(btnSearchsaveAddFilter)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, ReusableFunctions.selectDropdownbyName(filterDropdown, selectdropsown)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNClick(btnRun)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReusableFunctions.SearchFilterbyName = function (filterTxtbox, strValue) {
        return __awaiter(this, void 0, void 0, function () {
            var btnSearchsaveSearchPlus, btnRun, btnSearchsaveAddFilter, clearDefaultCriteria;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.refresh()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(6000)];
                    case 2:
                        _a.sent();
                        btnSearchsaveSearchPlus = protractor_1.element(protractor_1.by.xpath("//i[@class='fa fa-plus']"));
                        btnRun = protractor_1.element(protractor_1.by.xpath("(//button[contains(text(),' Run ')])[2]"));
                        btnSearchsaveAddFilter = protractor_1.element(protractor_1.by.xpath("//i[@class='fa fa-plus green']"));
                        clearDefaultCriteria = protractor_1.element(protractor_1.by.xpath("(//div[@class='ui-igcombo-clearicon ui-icon-circle-close ui-icon'])[1]"));
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNClick(btnSearchsaveSearchPlus)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNClick(btnSearchsaveAddFilter)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNClick(clearDefaultCriteria)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNSendKeys(filterTxtbox, strValue)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, ReusableFunctions.ExplicitwaitNClick(btnRun)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ReusableFunctions;
}());
exports.ReusableFunctions = ReusableFunctions;

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
var LoginPage_1 = require("../Pages/LoginPage");
var GetTestCases_1 = require("../../../Config/GetTestCases");
var HomePage_1 = require("../Pages/HomePage");
var SearchCompanyPage_1 = require("../Pages/SearchCompanyPage");
var CompanyPage_1 = require("../Pages/CompanyPage");
var Keyword = /** @class */ (function () {
    function Keyword() {
    }
    /********************************************************************************************************
        * Function Name: fn_Execute
        * About:This will execute keywords provided
        * Developed By: Soumen Saha     Created Date:11/5/2020       Last Modified: Poorvaja Deshmukh
    *******************************************************************************************************/
    Keyword.fn_Execute = function (keywrd, datsheet, ID) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        GetTestCases_1.ExcelData.setData(datsheet, ID);
                        _a = keywrd;
                        switch (_a) {
                            case 'Login': return [3 /*break*/, 1];
                            case 'NavigatetoCompanies': return [3 /*break*/, 3];
                            case "SearchCompany": return [3 /*break*/, 5];
                            case "Logout": return [3 /*break*/, 7];
                            case "ProcessCompany": return [3 /*break*/, 9];
                            case "OpenCompany": return [3 /*break*/, 11];
                            case "VerifyCompany": return [3 /*break*/, 13];
                            case "CreateNewCompany": return [3 /*break*/, 15];
                            case "NavigateToTab": return [3 /*break*/, 17];
                            case "VerifyCompanyFromSearch": return [3 /*break*/, 19];
                            case "ProcessCompanyFromSearch": return [3 /*break*/, 21];
                            case "UpdateCompany": return [3 /*break*/, 23];
                            case "ToggleHiddenMode": return [3 /*break*/, 25];
                            case "ToggleUnHiddenMode": return [3 /*break*/, 27];
                            case "SearchbyFilter": return [3 /*break*/, 29];
                            case "PublishOrRun": return [3 /*break*/, 31];
                            case "VerifyFields": return [3 /*break*/, 33];
                            case "SearchCompany_NoRefresh": return [3 /*break*/, 35];
                        }
                        return [3 /*break*/, 37];
                    case 1: return [4 /*yield*/, LoginPage_1.Login.login()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 3: return [4 /*yield*/, HomePage_1.NavigatetoCompanies.navigateToCompanies()];
                    case 4:
                        _b.sent();
                        protractor_1.browser.sleep(3000);
                        return [3 /*break*/, 37];
                    case 5:
                        protractor_1.browser.sleep(3000);
                        return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.searchCompany()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 7:
                        protractor_1.browser.sleep(3000);
                        return [4 /*yield*/, LoginPage_1.Login.logout()];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 9:
                        protractor_1.browser.sleep(3000);
                        return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.ProcessCompany()];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 11:
                        protractor_1.browser.sleep(3000);
                        return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.OpenCompany()];
                    case 12:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 13:
                        protractor_1.browser.sleep(3000);
                        return [4 /*yield*/, CompanyPage_1.Company.VerifyCompany()];
                    case 14:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 15: return [4 /*yield*/, CompanyPage_1.Company.CreateNewCompany(true)];
                    case 16:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 17: return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.fn_NavigateandCreateTab()];
                    case 18:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 19: return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.VerifyCompanyFromSearch()];
                    case 20:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 21: return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.ProcessCompanyFromSearch()];
                    case 22:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 23: return [4 /*yield*/, CompanyPage_1.Company.UpdateCompany()];
                    case 24:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 25: return [4 /*yield*/, HomePage_1.NavigatetoCompanies.ToggleHiddenMode()];
                    case 26:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 27: return [4 /*yield*/, HomePage_1.NavigatetoCompanies.ToggleUnHiddenMode()];
                    case 28:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 29: return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.fn_FilterSearch()];
                    case 30:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 31: return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.fn_RunOrPublishFilter()];
                    case 32:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 33: return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.fn_VerifyFields()];
                    case 34:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 35: return [4 /*yield*/, SearchCompanyPage_1.SearchCompany.SearchCompany_NoRefresh()];
                    case 36:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 37: return [2 /*return*/];
                }
            });
        });
    };
    return Keyword;
}());
exports.Keyword = Keyword;

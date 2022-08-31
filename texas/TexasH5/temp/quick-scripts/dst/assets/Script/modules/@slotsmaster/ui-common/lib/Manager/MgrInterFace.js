
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/Manager/MgrInterFace.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a55cc3tz9M54mekqWw0HNB', 'MgrInterFace');
// Script/modules/@slotsmaster/ui-common/lib/Manager/MgrInterFace.ts

"use strict";
/*
 * @Description:
}
 * @Author: 张菊
 * @Date: 2020-06-15 15:09:54
 * @LastEditTime: 2020-07-20 17:36:02
 * @LastEditors: 田鑫
 */
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
exports.MgrInterFace = void 0;
var HttpApi_1 = require("../HttpApi");
var AppConst_1 = require("../AppConst");
var MgrInterFace = /** @class */ (function () {
    function MgrInterFace() {
    }
    MgrInterFace.getInstance = function () {
        if (!this.instance) {
            this.instance = new MgrInterFace();
        }
        return this.instance;
    };
    MgrInterFace.prototype.refreshHall = function (callBack) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, HttpApi_1.default.http.get(HttpApi_1.default.server + HttpApi_1.Http_RefreshHall, {
                                        headers: {
                                            Authorization: AppConst_1.AppConst.accessToken,
                                        },
                                    })];
                                case 1:
                                    result = _a.sent();
                                    if (result.isSuccessful) {
                                        AppConst_1.AppConst.hallData = result.data;
                                        resolve(callBack());
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    MgrInterFace.prototype.collectReward = function (id, successCallBack, failCallback, catchErrorCallback) {
        return __awaiter(this, void 0, Promise, function () {
            var url, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = HttpApi_1.Http_PostCollectReward + id;
                        return [4 /*yield*/, HttpApi_1.default.http.post(HttpApi_1.default.server + url, {}, {
                                headers: {
                                    Authorization: AppConst_1.AppConst.accessToken,
                                },
                            })];
                    case 1:
                        result = _a.sent();
                        if (result.isSuccessful && result.code === 200) {
                            successCallBack();
                        }
                        else {
                            if (failCallback) {
                                failCallback();
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (catchErrorCallback) {
                            catchErrorCallback();
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MgrInterFace.prototype.getAwardId = function (adName, successCallBack) {
        return __awaiter(this, void 0, Promise, function () {
            var bodyParams, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bodyParams = {
                            awardCollectCode: adName,
                        };
                        return [4 /*yield*/, HttpApi_1.default.http.post(HttpApi_1.default.server + HttpApi_1.Http_GetRewardId, bodyParams, {
                                headers: {
                                    Authorization: AppConst_1.AppConst.accessToken,
                                },
                            })];
                    case 1:
                        result = _a.sent();
                        if (result.isSuccessful && result.code === 200) {
                            this.collectReward(result.awardCollectId, successCallBack);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return MgrInterFace;
}());
exports.MgrInterFace = MgrInterFace;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxNYW5hZ2VyXFxNZ3JJbnRlckZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILHNDQUFpRztBQUNqRyx3Q0FBdUM7QUFFdkM7SUFBQTtJQWdFQSxDQUFDO0lBOURpQix3QkFBVyxHQUF6QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQ1ksa0NBQVcsR0FBeEIsVUFBeUIsUUFBa0I7dUNBQUcsT0FBTzs7O2dCQUNqRCxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU87Ozs7d0NBQ1gscUJBQU0saUJBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxHQUFHLDBCQUFnQixFQUFFO3dDQUN4RSxPQUFPLEVBQUU7NENBQ0wsYUFBYSxFQUFFLG1CQUFRLENBQUMsV0FBVzt5Q0FDdEM7cUNBQ0osQ0FBQyxFQUFBOztvQ0FKRSxNQUFNLEdBQVEsU0FJaEI7b0NBQ0YsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO3dDQUNyQixtQkFBUSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO3dDQUNoQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztxQ0FDdkI7Ozs7eUJBQ0osQ0FBQyxFQUFDOzs7S0FDTjtJQUNZLG9DQUFhLEdBQTFCLFVBQ0ksRUFBVSxFQUNWLGVBQXlCLEVBQ3pCLFlBQXVCLEVBQ3ZCLGtCQUE2Qjt1Q0FDOUIsT0FBTzs7Ozs7O3dCQUVFLEdBQUcsR0FBRyxnQ0FBc0IsR0FBRyxFQUFFLENBQUM7d0JBQ3BCLHFCQUFNLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDckMsaUJBQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUNwQixFQUFFLEVBQ0Y7Z0NBQ0ksT0FBTyxFQUFFO29DQUNMLGFBQWEsRUFBRSxtQkFBUSxDQUFDLFdBQVc7aUNBQ3RDOzZCQUNKLENBQ0osRUFBQTs7d0JBUkcsTUFBTSxHQUFRLFNBUWpCO3dCQUNELElBQUksTUFBTSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTs0QkFDNUMsZUFBZSxFQUFFLENBQUM7eUJBQ3JCOzZCQUFNOzRCQUNILElBQUksWUFBWSxFQUFFO2dDQUNkLFlBQVksRUFBRSxDQUFDOzZCQUNsQjt5QkFDSjs7Ozt3QkFFRCxJQUFJLGtCQUFrQixFQUFFOzRCQUNwQixrQkFBa0IsRUFBRSxDQUFDO3lCQUN4Qjs7Ozs7O0tBRVI7SUFDWSxpQ0FBVSxHQUF2QixVQUF3QixNQUFjLEVBQUUsZUFBeUI7dUNBQUcsT0FBTzs7Ozs7d0JBQ25FLFVBQVUsR0FBRzs0QkFDYixnQkFBZ0IsRUFBRSxNQUFNO3lCQUMzQixDQUFDO3dCQUNnQixxQkFBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQU8sQ0FBQyxNQUFNLEdBQUcsMEJBQWdCLEVBQUUsVUFBVSxFQUFFO2dDQUNyRixPQUFPLEVBQUU7b0NBQ0wsYUFBYSxFQUFFLG1CQUFRLENBQUMsV0FBVztpQ0FDdEM7NkJBQ0osQ0FBQyxFQUFBOzt3QkFKRSxNQUFNLEdBQVEsU0FJaEI7d0JBQ0YsSUFBSSxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFOzRCQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUM7eUJBQzlEOzs7OztLQUNKO0lBQ0wsbUJBQUM7QUFBRCxDQWhFQSxBQWdFQyxJQUFBO0FBaEVZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBEZXNjcmlwdGlvbjogXG59XG4gKiBAQXV0aG9yOiDlvKDoj4pcbiAqIEBEYXRlOiAyMDIwLTA2LTE1IDE1OjA5OjU0XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA3LTIwIDE3OjM2OjAyXG4gKiBATGFzdEVkaXRvcnM6IOeUsOmRq1xuICovXG5cbmltcG9ydCBIdHRwQXBpLCB7IEh0dHBfUmVmcmVzaEhhbGwsIEh0dHBfUG9zdENvbGxlY3RSZXdhcmQsIEh0dHBfR2V0UmV3YXJkSWQgfSBmcm9tIFwiLi4vSHR0cEFwaVwiO1xuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vQXBwQ29uc3RcIjtcblxuZXhwb3J0IGNsYXNzIE1nckludGVyRmFjZSB7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZTogTWdySW50ZXJGYWNlO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTWdySW50ZXJGYWNlIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1nckludGVyRmFjZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbiAgICBwdWJsaWMgYXN5bmMgcmVmcmVzaEhhbGwoY2FsbEJhY2s6IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSBhd2FpdCBIdHRwQXBpLmh0dHAuZ2V0KEh0dHBBcGkuc2VydmVyICsgSHR0cF9SZWZyZXNoSGFsbCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogQXBwQ29uc3QuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICBBcHBDb25zdC5oYWxsRGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoY2FsbEJhY2soKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgYXN5bmMgY29sbGVjdFJld2FyZChcbiAgICAgICAgaWQ6IHN0cmluZyxcbiAgICAgICAgc3VjY2Vzc0NhbGxCYWNrOiBGdW5jdGlvbixcbiAgICAgICAgZmFpbENhbGxiYWNrPzogRnVuY3Rpb24sXG4gICAgICAgIGNhdGNoRXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBIdHRwX1Bvc3RDb2xsZWN0UmV3YXJkICsgaWQ7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSBhd2FpdCBIdHRwQXBpLmh0dHAucG9zdChcbiAgICAgICAgICAgICAgICBIdHRwQXBpLnNlcnZlciArIHVybCxcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEFwcENvbnN0LmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCAmJiByZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxCYWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChmYWlsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGNhdGNoRXJyb3JDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3JDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBnZXRBd2FyZElkKGFkTmFtZTogc3RyaW5nLCBzdWNjZXNzQ2FsbEJhY2s6IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IGJvZHlQYXJhbXMgPSB7XG4gICAgICAgICAgICBhd2FyZENvbGxlY3RDb2RlOiBhZE5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IGF3YWl0IEh0dHBBcGkuaHR0cC5wb3N0KEh0dHBBcGkuc2VydmVyICsgSHR0cF9HZXRSZXdhcmRJZCwgYm9keVBhcmFtcywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEFwcENvbnN0LmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsICYmIHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFJld2FyZChyZXN1bHQuYXdhcmRDb2xsZWN0SWQsIHN1Y2Nlc3NDYWxsQmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
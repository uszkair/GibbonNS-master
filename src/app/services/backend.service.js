"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var _CURRENT_USER = "_CURRENT_USER";
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.prototype.isUserLoggedIn = function () {
        var loggedIn = !!this.user;
        return loggedIn;
    };
    BackendService.prototype.login = function (user) {
        var that = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (user.email === user.password || true) { // mindig beenged!!
                    that.user = JSON.stringify(user);
                    resolve();
                }
                else {
                    reject({ message: 'Invalid Email/Password, For this example both should be same.' });
                }
            }, 1000);
        });
    };
    BackendService.prototype.logout = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                that.user = "";
                resolve();
            }, 1000);
        });
    };
    Object.defineProperty(BackendService.prototype, "user", {
        get: function () {
            return application_settings_1.getString(_CURRENT_USER);
        },
        set: function (theToken) {
            application_settings_1.setString(_CURRENT_USER, theToken);
        },
        enumerable: true,
        configurable: true
    });
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZEQUE0RDtBQUk1RCxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFHdEM7SUFBQTtJQXVDQSxDQUFDO0lBckNRLHVDQUFjLEdBQXJCO1FBQ0UsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFM0IsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVNLDhCQUFLLEdBQVosVUFBYSxJQUFVO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsVUFBVSxDQUFDO2dCQUNULElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRSxFQUFFLG1CQUFtQjtvQkFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNoQyxPQUFPLEVBQUUsQ0FBQztpQkFDWDtxQkFBTTtvQkFDTCxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsK0RBQStELEVBQUUsQ0FBQyxDQUFBO2lCQUNyRjtZQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1lBQzFDLFVBQVUsQ0FBQztnQkFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFZLGdDQUFJO2FBQWhCO1lBQ0UsT0FBTyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUFpQixRQUFnQjtZQUMvQixnQ0FBUyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FKQTtJQWxDVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBdUMxQjtJQUFELHFCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuY29uc3QgX0NVUlJFTlRfVVNFUiA9IFwiX0NVUlJFTlRfVVNFUlwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgaXNVc2VyTG9nZ2VkSW4oKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgbG9nZ2VkSW4gPSAhIXRoaXMudXNlcjtcclxuXHJcbiAgICByZXR1cm4gbG9nZ2VkSW47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuZW1haWwgPT09IHVzZXIucGFzc3dvcmQgfHwgdHJ1ZSkgeyAvLyBtaW5kaWcgYmVlbmdlZCEhXHJcbiAgICAgICAgICB0aGF0LnVzZXIgPSBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoeyBtZXNzYWdlOiAnSW52YWxpZCBFbWFpbC9QYXNzd29yZCwgRm9yIHRoaXMgZXhhbXBsZSBib3RoIHNob3VsZCBiZSBzYW1lLicgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoYXQudXNlciA9IFwiXCI7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCB1c2VyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKF9DVVJSRU5UX1VTRVIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXQgdXNlcih0aGVUb2tlbjogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoX0NVUlJFTlRfVVNFUiwgdGhlVG9rZW4pO1xyXG4gIH1cclxufVxyXG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var dialogs_1 = require("ui/dialogs");
var platform_1 = require("platform");
var app = require("application");
var backend_service_1 = require("../services/backend.service");
var utility_service_1 = require("../services/utility.service");
var user_model_1 = require("../services/user.model");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(backendService, utilityService, page, routerExtensions) {
        this.backendService = backendService;
        this.utilityService = utilityService;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.isAuthenticating = false;
        this.hideIcon = String.fromCharCode(0xf070);
        this.showIcon = String.fromCharCode(0xf06e);
        this.showPassword = false;
        this.emailError = "";
        this.passError = "";
        this.loginError = "";
        this.emailHasFocus = false;
        this.passHasFocus = false;
        this.user = new user_model_1.User();
        this.user.email = "";
        this.user.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("login-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        this.showHideIcon = this.hideIcon;
        if (platform_1.isAndroid && platform_1.device.sdkVersion >= '21') {
            var View = android.view.View;
            var window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x000000);
            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
    };
    LoginComponent.prototype.hasEmailErrors = function () {
        var hasErrorMsg = !!this.emailError;
        if (!hasErrorMsg)
            return false;
        var isValidEmail = true; //this.user.hasEmail() && this.utilityService.isValidEmail(this.user.email);
        var hasError = hasErrorMsg || !isValidEmail;
        if (isValidEmail) {
            this.emailError = "";
            return false;
        }
        return hasError;
    };
    LoginComponent.prototype.hasPasswordErrors = function () {
        var hasErrorMsg = !!this.passError;
        if (!hasErrorMsg)
            return false;
        var isValidPassword = this.user.password.length > 0;
        var hasError = hasErrorMsg || !isValidPassword;
        if (isValidPassword) {
            this.passError = "";
            return false;
        }
        return hasError;
    };
    LoginComponent.prototype.getEmailError = function () {
        return this.emailError;
    };
    LoginComponent.prototype.getPasswordError = function () {
        return this.passError;
    };
    LoginComponent.prototype.onEmailFocus = function () {
        this.emailHasFocus = true;
    };
    LoginComponent.prototype.onPasswordFocus = function () {
        this.passHasFocus = true;
        this.updateErrors(false);
    };
    LoginComponent.prototype.updateErrors = function (checkPass) {
        if (this.user.hasEmail()) {
            if (this.utilityService.isValidEmail(this.user.email)) {
                this.emailError = "";
            }
            else {
                this.emailError = "Invalid Email";
            }
        }
        else {
            this.emailError = "Email cannot be blank";
        }
        if (checkPass) {
            var length_1 = this.user.password.length;
            if (length_1 == 0) {
                this.passError = "Password cannot be blank";
            }
            else {
                this.passError = "";
            }
        }
    };
    LoginComponent.prototype.hasLoginErrors = function () {
        return !!this.loginError;
    };
    LoginComponent.prototype.getLoginError = function () {
        return this.loginError;
    };
    LoginComponent.prototype.isValidForm = function () {
        var isValid = !!this.emailError || !!this.passError;
        return !isValid;
    };
    LoginComponent.prototype.showHidePassword = function () {
        this.showPassword = !this.showPassword;
        this.showHideIcon = this.showPassword ? this.showIcon : this.hideIcon;
        var passField = this.passwordField.nativeElement;
        passField.secure = !passField.secure;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.updateErrors(true);
        if (this.isValidForm()) {
            this.isAuthenticating = true;
            // Use the backend service to login
            this.backendService.login(this.user)
                .then(function () {
                _this.isAuthenticating = false;
                _this.routerExtensions.navigate(["/home"], { clearHistory: true });
            }).catch(function (error) {
                _this.isAuthenticating = false;
                _this.loginError = error.message;
            });
        }
    };
    LoginComponent.prototype.isSubmitEnabled = function () {
        return !this.isAuthenticating && this.utilityService.isValidEmail(this.user.email);
    };
    LoginComponent.prototype.isTablet = function () {
        return this.utilityService.isTablet();
    };
    // You can configure your backend and present appropriate window for recovery.
    LoginComponent.prototype.forgotPassword = function () {
        dialogs_1.alert({
            title: "Forgot Password",
            message: "Configure your backend to add a forgot password. Check 'login-kinvey' branch to work with Kinvey backend.",
            okButtonText: "Close"
        }).then(function () {
            console.log("Dialog closed!");
        });
    };
    __decorate([
        core_1.ViewChild('password'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "passwordField", void 0);
    __decorate([
        core_1.ViewChild('email'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "emailField", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            utility_service_1.UtilityService,
            page_1.Page,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUcvRCxnQ0FBK0I7QUFDL0Isc0NBQW1DO0FBRW5DLHFDQUE2QztBQUM3QyxpQ0FBbUM7QUFFbkMsK0RBQTZEO0FBQzdELCtEQUE2RDtBQUM3RCxxREFBOEM7QUFTOUM7SUFvQkUsd0JBQ1UsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsSUFBVSxFQUNWLGdCQUFrQztRQUhsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBbEI1QyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFN0IsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVFuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENB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Z0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7eUNBc0IwQixnQ0FBYztZQUNkLGdDQUFjO1lBQ3hCLFdBQUk7WUFDUSx5QkFBZ0I7T0F4QmpDLGNBQWMsQ0FrTDFCO0lBQUQscUJBQUM7Q0FBQSxBQWxMRCxJQWtMQztBQWxMWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGQvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBkZXZpY2UgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbGl0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLm1vZGVsXCI7XHJcblxyXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsb2dpblwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3Bhc3N3b3JkJykgcGFzc3dvcmRGaWVsZDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdlbWFpbCcpIGVtYWlsRmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHVzZXI6IFVzZXI7XHJcbiAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaGlkZUljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA3MCk7XHJcbiAgcHVibGljIHNob3dJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNmUpO1xyXG4gIHB1YmxpYyBzaG93SGlkZUljb246IGFueTtcclxuICBwcml2YXRlIHNob3dQYXNzd29yZCA9IGZhbHNlO1xyXG5cclxuICBlbWFpbEVycm9yID0gXCJcIjtcclxuICBwYXNzRXJyb3IgPSBcIlwiO1xyXG4gIGxvZ2luRXJyb3IgPSBcIlwiO1xyXG5cclxuICBlbWFpbEhhc0ZvY3VzID0gZmFsc2U7XHJcbiAgcGFzc0hhc0ZvY3VzID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICApIHtcclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICB0aGlzLnVzZXIuZW1haWwgPSBcIlwiO1xyXG4gICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnBhZ2UuY3NzQ2xhc3Nlcy5hZGQoXCJsb2dpbi1wYWdlLWJhY2tncm91bmRcIik7XHJcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XHJcbiAgICB0aGlzLnNob3dIaWRlSWNvbiA9IHRoaXMuaGlkZUljb247XHJcblxyXG4gICAgaWYgKGlzQW5kcm9pZCAmJiBkZXZpY2Uuc2RrVmVyc2lvbiA+PSAnMjEnKSB7XHJcbiAgICAgIHZhciBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XHJcbiAgICAgIHZhciB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xyXG4gICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xyXG5cclxuICAgICAgdmFyIGRlY29yVmlldyA9IHdpbmRvdy5nZXREZWNvclZpZXcoKTtcclxuICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcclxuICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcclxuICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxyXG4gICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxyXG4gICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNFbWFpbEVycm9ycygpIHtcclxuICAgIGNvbnN0IGhhc0Vycm9yTXNnID0gISF0aGlzLmVtYWlsRXJyb3I7XHJcbiAgICBpZiAoIWhhc0Vycm9yTXNnKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNWYWxpZEVtYWlsID0gdHJ1ZTsgLy90aGlzLnVzZXIuaGFzRW1haWwoKSAmJiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVmFsaWRFbWFpbCh0aGlzLnVzZXIuZW1haWwpO1xyXG4gICAgbGV0IGhhc0Vycm9yID0gaGFzRXJyb3JNc2cgfHwgIWlzVmFsaWRFbWFpbDtcclxuXHJcbiAgICBpZiAoaXNWYWxpZEVtYWlsKSB7XHJcbiAgICAgIHRoaXMuZW1haWxFcnJvciA9IFwiXCJcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNFcnJvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNQYXNzd29yZEVycm9ycygpIHtcclxuICAgIGNvbnN0IGhhc0Vycm9yTXNnID0gISF0aGlzLnBhc3NFcnJvcjtcclxuICAgIGlmICghaGFzRXJyb3JNc2cpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBpc1ZhbGlkUGFzc3dvcmQgPSB0aGlzLnVzZXIucGFzc3dvcmQubGVuZ3RoID4gMDtcclxuICAgIGxldCBoYXNFcnJvciA9IGhhc0Vycm9yTXNnIHx8ICFpc1ZhbGlkUGFzc3dvcmQ7XHJcblxyXG4gICAgaWYgKGlzVmFsaWRQYXNzd29yZCkge1xyXG4gICAgICB0aGlzLnBhc3NFcnJvciA9IFwiXCJcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNFcnJvcjtcclxuICB9XHJcblxyXG4gIGdldEVtYWlsRXJyb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbWFpbEVycm9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFzc3dvcmRFcnJvcigpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXNzRXJyb3I7XHJcbiAgfVxyXG5cclxuICBvbkVtYWlsRm9jdXMoKSB7XHJcbiAgICB0aGlzLmVtYWlsSGFzRm9jdXMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25QYXNzd29yZEZvY3VzKCkge1xyXG4gICAgdGhpcy5wYXNzSGFzRm9jdXMgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlRXJyb3JzKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUVycm9ycyhjaGVja1Bhc3MpIHtcclxuICAgIGlmICh0aGlzLnVzZXIuaGFzRW1haWwoKSkge1xyXG4gICAgICBpZiAodGhpcy51dGlsaXR5U2VydmljZS5pc1ZhbGlkRW1haWwodGhpcy51c2VyLmVtYWlsKSkge1xyXG4gICAgICAgIHRoaXMuZW1haWxFcnJvciA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gXCJJbnZhbGlkIEVtYWlsXCJcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbWFpbEVycm9yID0gXCJFbWFpbCBjYW5ub3QgYmUgYmxhbmtcIlxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGVja1Bhc3MpIHtcclxuICAgICAgbGV0IGxlbmd0aCA9IHRoaXMudXNlci5wYXNzd29yZC5sZW5ndGg7XHJcbiAgICAgIGlmIChsZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHRoaXMucGFzc0Vycm9yID0gXCJQYXNzd29yZCBjYW5ub3QgYmUgYmxhbmtcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBhc3NFcnJvciA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhc0xvZ2luRXJyb3JzKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5sb2dpbkVycm9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9naW5FcnJvcigpIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2luRXJyb3I7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsaWRGb3JtKCkge1xyXG4gICAgbGV0IGlzVmFsaWQgPSAhIXRoaXMuZW1haWxFcnJvciB8fCAhIXRoaXMucGFzc0Vycm9yO1xyXG4gICAgcmV0dXJuICFpc1ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgc2hvd0hpZGVQYXNzd29yZCgpIHtcclxuICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xyXG4gICAgdGhpcy5zaG93SGlkZUljb24gPSB0aGlzLnNob3dQYXNzd29yZCA/IHRoaXMuc2hvd0ljb24gOiB0aGlzLmhpZGVJY29uO1xyXG4gICAgbGV0IHBhc3NGaWVsZDogVGV4dEZpZWxkID0gdGhpcy5wYXNzd29yZEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBwYXNzRmllbGQuc2VjdXJlID0gIXBhc3NGaWVsZC5zZWN1cmU7XHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMudXBkYXRlRXJyb3JzKHRydWUpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzVmFsaWRGb3JtKCkpIHtcclxuICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcclxuICAgICAgLy8gVXNlIHRoZSBiYWNrZW5kIHNlcnZpY2UgdG8gbG9naW5cclxuICAgICAgdGhpcy5iYWNrZW5kU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5sb2dpbkVycm9yID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU3VibWl0RW5hYmxlZCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0F1dGhlbnRpY2F0aW5nICYmIHRoaXMudXRpbGl0eVNlcnZpY2UuaXNWYWxpZEVtYWlsKHRoaXMudXNlci5lbWFpbCk7XHJcbiAgfVxyXG5cclxuICBpc1RhYmxldCgpIHtcclxuICAgIHJldHVybiB0aGlzLnV0aWxpdHlTZXJ2aWNlLmlzVGFibGV0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBZb3UgY2FuIGNvbmZpZ3VyZSB5b3VyIGJhY2tlbmQgYW5kIHByZXNlbnQgYXBwcm9wcmlhdGUgd2luZG93IGZvciByZWNvdmVyeS5cclxuICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgIGFsZXJ0KHtcclxuICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiQ29uZmlndXJlIHlvdXIgYmFja2VuZCB0byBhZGQgYSBmb3Jnb3QgcGFzc3dvcmQuIENoZWNrICdsb2dpbi1raW52ZXknIGJyYW5jaCB0byB3b3JrIHdpdGggS2ludmV5IGJhY2tlbmQuXCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJDbG9zZVwiXHJcbiAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var backend_service_1 = require("./services/backend.service");
var utility_service_1 = require("./services/utility.service");
var login_component_1 = require("./login/login.component");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var auth_guard_service_1 = require("./auth-guard.service");
var bluetooth_service_1 = require("~/app/services/bluetooth.service");
var bluetooth_component_1 = require("~/app/bluetooth/bluetooth.component");
var bluetooth_list_component_1 = require("~/app/bluetooth-list/bluetooth-list.component");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var http_client_1 = require("nativescript-angular/http-client");
function createTranslateLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                angular_1.NativeScriptUISideDrawerModule,
                http_client_1.NativeScriptHttpClientModule,
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                app_routing_module_1.AppRoutingModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [http_1.HttpClient]
                    }
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                bluetooth_component_1.BluetoothComponent,
                bluetooth_list_component_1.BluetoothListComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
            ],
            exports: [
                bluetooth_component_1.BluetoothComponent,
                bluetooth_list_component_1.BluetoothListComponent
            ],
            providers: [
                backend_service_1.BackendService,
                utility_service_1.UtilityService,
                bluetooth_service_1.BluetoothService,
                [auth_guard_service_1.AuthGuard]
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUduRSwyREFBc0Q7QUFFdEQsOERBQTBEO0FBQzFELDhEQUEwRDtBQUUxRCwyREFBdUQ7QUFDdkQsaURBQTZDO0FBQzdDLHdEQUFvRDtBQUVwRCwyREFBK0M7QUFDL0Msc0VBQWtFO0FBQ2xFLDJFQUF1RTtBQUN2RSwwRkFBcUY7QUFDckYsOERBQWtGO0FBQ2xGLDRDQUc2QjtBQUM3Qiw2Q0FBZ0Q7QUFDaEQsMERBQStEO0FBQy9ELGdFQUE4RTtBQUU5RSxTQUFnQixxQkFBcUIsQ0FBQyxJQUFnQjtJQUNsRCxPQUFPLElBQUksaUNBQW1CLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBRkQsc0RBRUM7QUE2Q0Q7SUFIQTs7TUFFRTtJQUNGO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUEzQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUE4QjtnQkFDOUIsMENBQTRCO2dCQUM1Qix3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIscUNBQWdCO2dCQUNoQixzQkFBZSxDQUFDLE9BQU8sQ0FBQztvQkFDcEIsTUFBTSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxzQkFBZTt3QkFDeEIsVUFBVSxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ25DLElBQUksRUFBRSxDQUFDLGlCQUFVLENBQUM7cUJBQ3JCO2lCQUNKLENBQUM7YUFDTDtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWix3Q0FBa0I7Z0JBQ2xCLGlEQUFzQjtnQkFDdEIsZ0NBQWM7Z0JBQ2QsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixpREFBc0I7YUFDekI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2dCQUNoQixDQUFDLDhCQUFTLENBQUM7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBRUY7O1VBRUU7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcblxyXG5pbXBvcnQge0FwcFJvdXRpbmdNb2R1bGV9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHtCYWNrZW5kU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXRpbGl0eVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3V0aWxpdHkuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xyXG5pbXBvcnQge0JsdWV0b290aFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9ibHVldG9vdGguc2VydmljZVwiO1xyXG5pbXBvcnQge0JsdWV0b290aENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2JsdWV0b290aC9ibHVldG9vdGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qmx1ZXRvb3RoTGlzdENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2JsdWV0b290aC1saXN0L2JsdWV0b290aC1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtcclxuICAgIFRyYW5zbGF0ZUxvYWRlcixcclxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcclxufSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZUh0dHBMb2FkZXJ9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlclwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZUxvYWRlcihodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgJy9hc3NldHMvaTE4bi8nLCAnLmpzb24nKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgICAgICAgIGxvYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxyXG4gICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogKGNyZWF0ZVRyYW5zbGF0ZUxvYWRlciksXHJcbiAgICAgICAgICAgICAgICBkZXBzOiBbSHR0cENsaWVudF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEJsdWV0b290aENvbXBvbmVudCxcclxuICAgICAgICBCbHVldG9vdGhMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEJsdWV0b290aENvbXBvbmVudCxcclxuICAgICAgICBCbHVldG9vdGhMaXN0Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UsXHJcbiAgICAgICAgVXRpbGl0eVNlcnZpY2UsXHJcbiAgICAgICAgQmx1ZXRvb3RoU2VydmljZSxcclxuICAgICAgICBbQXV0aEd1YXJkXVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcblxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59XHJcbiJdfQ==
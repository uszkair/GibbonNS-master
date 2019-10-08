import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";


import {AppRoutingModule} from "./app-routing.module";

import {BackendService} from "./services/backend.service";
import {UtilityService} from "./services/utility.service";

import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

import {AuthGuard} from "./auth-guard.service";
import {BluetoothService} from "~/app/services/bluetooth.service";
import {BluetoothComponent} from "~/app/bluetooth/bluetooth.component";
import {BluetoothListComponent} from "~/app/bluetooth-list/bluetooth-list.component";
import {NativeScriptUISideDrawerModule} from "nativescript-ui-sidedrawer/angular";
import {
    TranslateLoader,
    TranslateModule,
} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {NativeScriptRouterModule} from "nativescript-angular";
import {SideComponent} from "~/app/side/side.component";

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent,
        SideComponent,
        BluetoothComponent,
        BluetoothListComponent,
        LoginComponent,
        HomeComponent,
    ],
    exports: [
        NativeScriptRouterModule,
        NativeScriptModule,
        SideComponent,
        BluetoothComponent,
        BluetoothListComponent
    ],
    providers: [
        BackendService,
        UtilityService,
        BluetoothService,
        [AuthGuard]
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
}

import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http, XHRBackend, RequestOptions} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./auth.service";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth-guard.service";
import {AuthHttp} from "./auth-http";
import {PageNotFoundComponent} from "./page-not-found.component";
import {AppConfiguration} from "./app-configuration.service";
import {ResponsiveService} from "./main/responsive.service";


export function authHttpFactory(xhrBackend: XHRBackend,
                                requestOptions: RequestOptions): Http {
  return new AuthHttp(xhrBackend, requestOptions);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: Http,
      useFactory: authHttpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    AppConfiguration,
    ResponsiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

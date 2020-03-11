import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListAmiComponent } from './list-ami/list-ami.component';
import { InformationComponent } from './information/information.component';

import { InformationService } from "./services/information.service";
import { AuthService } from "./services/auth.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListAmiComponent,
    InformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService,InformationService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

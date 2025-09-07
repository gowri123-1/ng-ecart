import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app/app';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { DisplayUsers } from './components/display-users/display-users';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Highlight } from './directives/highlight';
import { StarPipePipe } from './pipes/star-pipe';
import { PipeDemo } from './components/pipe-demo/pipe-demo';
import { Header } from './components/header/header';
import { CommonSideNavModule } from './components/common-side-nav/common-side-nav-module';
import { Login } from './components/login/login';
import { Product } from './components/product/product';
import { AuthInterceptor } from './app/auth-interceptor';

@NgModule({
  declarations: [
    App,
    TemplateDrivenForm,
    ReactiveForm,
    DisplayUsers,
    Highlight,
    StarPipePipe,
    PipeDemo,
    Header,
    Login,
    Product,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonSideNavModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }



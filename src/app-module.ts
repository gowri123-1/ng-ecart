import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app/app';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { DisplayUsers } from './components/display-users/display-users';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    TemplateDrivenForm,
    ReactiveForm,
    DisplayUsers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

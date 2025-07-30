import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app/app';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveForm } from './components/reactive-form/reactive-form';

@NgModule({
  declarations: [
    App,
    TemplateDrivenForm,
    ReactiveForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

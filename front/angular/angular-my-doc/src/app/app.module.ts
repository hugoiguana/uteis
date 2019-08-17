import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateSimplesComponent } from './template-simples/template-simples.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSimplesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

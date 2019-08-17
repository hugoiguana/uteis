import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateSimplesComponent } from './template-simples/template-simples.component';
import { InterpolacaoEBindModule } from './interpolacao-e-bind/interpolacao-e-bind.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSimplesComponent
  ],
  imports: [
    BrowserModule,
    InterpolacaoEBindModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

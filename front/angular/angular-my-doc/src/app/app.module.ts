import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateSimplesComponent } from './template-simples/template-simples.component';
import { InterpolacaoEBindModule } from './interpolacao-e-bind/interpolacao-e-bind.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSimplesComponent
  ],
  imports: [
    BrowserModule,
    InterpolacaoEBindModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

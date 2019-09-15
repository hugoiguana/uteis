import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateSimplesComponent } from './template-simples/template-simples.component';
import { InterpolacaoEBindModule } from './interpolacao-e-bind/interpolacao-e-bind.module';

import { FormsModule } from './forms/forms.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSimplesComponent
  ],
  imports: [
    BrowserModule,
    InterpolacaoEBindModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

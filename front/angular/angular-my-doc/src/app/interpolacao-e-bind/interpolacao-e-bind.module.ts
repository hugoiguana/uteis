import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';

@NgModule({
  declarations: [InterpolacaoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InterpolacaoComponent
  ]
})
export class InterpolacaoEBindModule { }

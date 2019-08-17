import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { OneWayDatabindComponent } from './one-way-databind/one-way-databind.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [InterpolacaoComponent, PropertyBindingComponent, OneWayDatabindComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InterpolacaoComponent, PropertyBindingComponent
  ]
})
export class InterpolacaoEBindModule { }

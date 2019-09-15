import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ReactiveFormsComponent]
})
export class FormsModule { }

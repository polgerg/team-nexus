import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormInputComponent } from './components/custom-form-input/custom-form-input.component'
import { PrimeModule } from '../prime/prime.module';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';



@NgModule({
  declarations: [
    CustomFormInputComponent,
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CustomFormInputComponent,
    PrimeModule,
    PrimaryButtonComponent
  ]
})
export class SharedModule { }

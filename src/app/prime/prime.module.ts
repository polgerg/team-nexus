import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [
    AccordionModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    ProgressSpinnerModule,
  ],
  exports: [
    AccordionModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    ProgressSpinnerModule,
  ],
})
export class PrimeModule {}

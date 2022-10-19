import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-custom-form-input',
  templateUrl: './custom-form-input.component.html',
  styleUrls: ['./custom-form-input.component.scss']
})
export class CustomFormInputComponent implements OnInit {

  @Input() inputType?: string;
  @Input() inputId?: string;
  @Input() control!: FormControl;
  @Input() label?: string;

  constructor() { }

  ngOnInit(): void {
  }

}

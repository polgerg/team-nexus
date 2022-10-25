import { IUserRegisterForm } from 'src/app/models/user-register-form.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Input() form!: FormGroup<IUserRegisterForm>;
  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }
  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }
  get zip(): FormControl {
    return this.form.get('zip') as FormControl;
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
  constructor() {}

  ngOnInit(): void {}
}

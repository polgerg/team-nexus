import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserRegisterForm } from 'src/app/models/user-register-form';
import { IUserRegisterForm } from 'src/app/models/user-register-form.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup<IUserRegisterForm> = new UserRegisterForm();
  constructor() {}

  ngOnInit(): void {}
}

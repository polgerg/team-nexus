import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserLoginForm } from 'src/app/models/user-login-form';
import { IUserLoginForm } from 'src/app/models/user-login-form.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup<IUserLoginForm> = new UserLoginForm()

  constructor() { }

  ngOnInit(): void {
  }

}

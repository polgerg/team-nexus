import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUserLoginForm } from 'src/app/models/user-login-form.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input()form !: FormGroup<IUserLoginForm>

  constructor() { }

  ngOnInit(): void {
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { UserLoginForm } from 'src/app/models/user-login-form';
import { IUserLoginForm } from 'src/app/models/user-login-form.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<IUserLoginForm> = new UserLoginForm();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .login$(
        this.loginForm.get('username')!.value,
        this.loginForm.get('password')!.value
      )
      .pipe(
        catchError((err) => {
          this.loginForm.setErrors({ invalidCredentials: true });
          console.log(err);
          throw err;
        })
      )
      .subscribe((user) => {
        this.authService.handleUserLogin(user);
        this.router.navigate(['/']);
      });
  }
}

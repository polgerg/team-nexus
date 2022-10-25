import { AuthService } from './../../../../services/auth.service';
import { User } from './../../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserRegisterForm } from 'src/app/models/user-register-form';
import { IUserRegisterForm } from 'src/app/models/user-register-form.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup<IUserRegisterForm> = new UserRegisterForm(
    this.authService
  );
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.registerForm);
    let user: User = {
      firstName: this.registerForm.get('firstName')!.value,
      lastName: this.registerForm.get('lastName')!.value,
      username: this.registerForm.get('username')!.value,
      zip: parseInt(this.registerForm.get('zip')!.value),
      password: this.registerForm.get('password')!.value,
      validated: false,
      created_at: Date.now().toString(),
    };
    this.authService.register$(user).subscribe((user: User) => {
      alert('succesfully registered');
      this.router.navigate(['/auth']);
    });
  }
}

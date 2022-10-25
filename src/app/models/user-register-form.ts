import { AuthService } from 'src/app/services/auth.service';
import { UsernameValidator } from './../util/customValidators/UsernameValidator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserRegisterForm } from './user-register-form.interface';

export class UserRegisterForm extends FormGroup<IUserRegisterForm> {
  constructor(authService: AuthService) {
    super({
      firstName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.pattern(/^[A-Za-z]+$/)],
      }),
      lastName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.pattern(/^[A-Za-z]+$/)],
      }),
      username: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,

          Validators.pattern(/^[a-z0-9]+$/),
          Validators.minLength(4),
        ],
        asyncValidators: [UsernameValidator.createValidator(authService)],
      }),
      zip: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern(/^[0-9]{4}$/),
          Validators.min(1000),
          Validators.max(9999),
        ],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^.*(?=.*[#@.*])/),
        ],
      }),
    });
  }
}

import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

export class UsernameValidator {
  static createValidator(authService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return authService.checkIfUsernameExists$(control.value).pipe(
        map((res: boolean) => {
          return res ? { usernameExists: true } : {};
        })
      );
    };
  }
}

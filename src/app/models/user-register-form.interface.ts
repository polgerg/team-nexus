import { FormControl } from '@angular/forms';

export interface IUserRegisterForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  username: FormControl<string>;
  password: FormControl<string>;
  zip: FormControl<number | undefined>;
}

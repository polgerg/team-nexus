import { FormControl } from "@angular/forms";

export interface IUserLoginForm {
    username: FormControl<string>,
    password: FormControl<string>,
}

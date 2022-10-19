import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IUserLoginForm } from "./user-login-form.interface";

export class UserLoginForm extends FormGroup<IUserLoginForm> {
    constructor() {
        super({
            username: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
            password: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
        })
    }
}
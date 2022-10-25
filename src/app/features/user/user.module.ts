import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ValidateComponent } from './features/validate/validate.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ValidateComponent
  ],
  imports: [
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }

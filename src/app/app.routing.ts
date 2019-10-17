import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ValidateComponent } from './userdashboard/validate/validate.component';
import { combineLatest } from 'rxjs';

export const AppRoutes: Routes = [
    {
      path: ' ',
      component: LoginComponent,    
  },
    {
      path: "login", 
      component : LoginComponent, 
    },
    {
      path: "signup",
      component : SignupComponent,
    },
    // {
    //   path: "dashboard", 
    //   component : DashboardComponent, 
    // },
  ];
  
  
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ValidateComponent } from '../validate/validate.component';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from '../orders/orders.component';
import { LoginComponent } from 'src/app/login/login.component';

export const dashboardRoutes: Routes = [
    { path: 'dashboard', redirectTo:"dashboard", pathMatch:"full" },
    {  path: 'dashboard', component: DashboardComponent,
    children:[
        { path: 'validate', component : ValidateComponent,},
        { path: 'order' , component : OrdersComponent,},
    ]},

 {
     path : "login", component : LoginComponent,
 },
   
 
];
@NgModule({
    declarations: [ 
        DashboardComponent,
        ValidateComponent,
    ],
    imports:[RouterModule.forChild(dashboardRoutes),CommonModule],
    providers: [],
    exports:[RouterModule, 
        DashboardComponent,
        ValidateComponent,

    ]
})
export class DashboardModule { }
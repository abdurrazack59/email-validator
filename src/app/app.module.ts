import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { AppRoutes } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './userdashboard/dashboard/dashboard.component';
import { ValidateComponent } from './userdashboard/validate/validate.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './userdashboard/dashboard/dashboard.module';
import { dashboardRoutes } from './userdashboard/dashboard/dashboard.module';
import { OrdersComponent } from './userdashboard/orders/orders.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BasicAuthHtppInterceptorServiceComponent } from './basic-auth-htpp-interceptor-service/basic-auth-htpp-interceptor-service.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    OrdersComponent,
    BasicAuthHtppInterceptorServiceComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    
  ],
 

  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule, ]
})
export class AppModule { }

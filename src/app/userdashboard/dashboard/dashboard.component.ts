import { Component, OnInit } from '@angular/core';
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path : 'validate', title: 'Validate Emails', icon: 'fa fa-envelope-open-o', class: ''},
  { path: 'order', title: 'My Orders ',  icon: 'fa fa-shopping-cart', class: ''},
  // { path: 'validate', title: 'Upload Invoice',  icon:'fa fa-upload', class: '' },
  
  { path: '/login', title: 'Logout',  icon:'fa fa-sign-out', class: '' }
  
  
  
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}

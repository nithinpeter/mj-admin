import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { LoginService } from '../login/login.service';
import LoginComponent from '../login/login.component';
import HomeComponent from '../home/home.component';
import AddNewComponent from '../add-new/add-new.component';

import AuthRouterOutlet from './auth-router-outlet';

@Component({
  selector: 'main-app',
  template: `
    <h2>MJ ADMIN</h2>
    <router-outlet></router-outlet>
  `,
  directives: [
    AuthRouterOutlet,
    
  ],
  providers: [
    HTTP_PROVIDERS,
    LoginService
  ]
})
@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent },
  { path: '/login', name: 'Login', component: LoginComponent },
  { path: '/admin', name: 'Home', component: HomeComponent },
  { path: '/admin/add-new', name: 'AddNew', component: AddNewComponent },
  // { path: '/admin/:id', name: 'Home', component: HomeComponent },
])
export class AppComponent {
}



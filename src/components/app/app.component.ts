import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { LoginService } from '../../services/login.service'
import LoginComponent from '../login/login.component';
import HomeComponent from '../home/home.component';

@Component({
  selector: 'main-app',
  template: `
    <h2>MJ ADMIN</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    LoginService
  ]
})
@RouteConfig([
  { path: '/', name: 'Login', component: LoginComponent },
  { path: '/login', name: 'Login', component: LoginComponent },
  { path: '/home', name: 'Home', component: HomeComponent }
])
export class AppComponent {
}


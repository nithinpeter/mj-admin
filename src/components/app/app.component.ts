import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { LoginService } from '../login/login.service';
import LoginComponent from '../login/login.component';
import HomeComponent from '../home/home.component';
import AddNewComponent from '../add-new/add-new.component';

import StoreService from '../../redux/store';
// import AuthRouterOutlet from './auth-router-outlet';

@Component({
  selector: 'main-app',
  template: `
    <h2>
      <a [routerLink]="['']">MJ ADMIN</a>
      {{counter}}
    </h2>
    <nav>
      <a [routerLink]="['add-new']">Add New</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [
    // AuthRouterOutlet,
    // RouteConfig,
    ROUTER_DIRECTIVES
  ],
  providers: [
    StoreService,
    HTTP_PROVIDERS,
    LoginService
  ]
})
@Routes([
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/home', component: HomeComponent },
  { path: '/add-new', component: AddNewComponent },
  { path: '/edit/:id', component: AddNewComponent },
  // { path: '/admin/:id', name: 'Home', component: HomeComponent },
])
export class AppComponent {
  
  counter;
  
  constructor(store: StoreService) {
    this.counter = store.select("counter");
  }
}



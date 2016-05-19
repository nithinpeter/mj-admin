import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    template: `
    <h5>Login</h5>
    <form>
        {{name}}
        <div>
            <input #email type='' />
        </div>
        <div>
            <input #password type='password' />
        </div>
        
        <nav>
        <button (click)="handleLogin(e, email.value, password.value)">Login</button>
        
        </nav>
    </form>
  `,
    directives: [ROUTER_DIRECTIVES]
})
export default class LoginComponent {
    
    errorMessage;
    
    constructor(private _loginService: LoginService, private _router: Router) {

    } 

    handleLogin(event, username, password) {
        this._loginService.login({username, password })
            .subscribe(
                response => {
                    localStorage.setItem("token", response.id_token);
                    this._router.navigate( ['/Home'] );
                },
                error => this.errorMessage = <any>error
            );
    }

}



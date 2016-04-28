import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { LoginService } from '../../services/login.service';

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
    directives: [RouterLink]
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
                    this._router.navigate( ['Home'] );
                },
                error => this.errorMessage = <any>error
            );
    }

}



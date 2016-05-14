import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Config } from '../../common/config';
import { contentHeaders } from '../../common/http-client';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private _http: Http) {
        
    }
    
    login(body) {
        return this._http.post(Config.baseUrl() + 'session/login', JSON.stringify(body), {
            headers: contentHeaders
        }).map((res: Response) => res.json());
    }
}
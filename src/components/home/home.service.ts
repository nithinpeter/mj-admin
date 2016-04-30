import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Config } from '../../common/config';
import { contentHeaders } from '../../common/http-client';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
    constructor(private _http: Http) {
        
    }
    
    getMovies() {
        return this._http.get(Config.baseUrl() + 'movies', {
            headers: contentHeaders
        }).map((res: Response) => res.json());
    }
}
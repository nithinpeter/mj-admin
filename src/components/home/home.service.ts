import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Config } from '../../common/config';
import { contentHeaders } from '../../common/http-client';
import 'rxjs/add/operator/map';
import StoreService from '../../redux/store';
import * as ACTION_TYPES from '../../redux/reducers/movies-reducer'


@Injectable()
export class HomeService {
    constructor(private _http: Http, private _store: StoreService) {
        
    }
    
    getMovies() {
        this._store.dispatch({type: ACTION_TYPES.REQUEST_MOVIES});
        return this._http.get(Config.baseUrl() + 'movies', {
            headers: contentHeaders
        }).map((res: Response) => {
            return res.json();
        }).subscribe((response)=> {
            return this._store.dispatch({type: ACTION_TYPES.SUCCESS_MOVIES, response: response});
        });
    }
}
import { Injectable } from '@angular/core';

import { createStore } from 'redux';
import rootReducer from './reducers'


@Injectable()
export default class StoreService {
    
    _store;
    _state;
    
    constructor() {
        this._store = createStore(rootReducer);        
    }
    
    _getState() {
        this._state = this._store.getState();
        // return this._state; 
    }
    
    select(value: string) {
        this._getState();
        return this._state[value];
    }
    
    dispatch(action) {
        this._store.dispatch(action);
    }
}



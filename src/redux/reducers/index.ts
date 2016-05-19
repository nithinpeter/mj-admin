import { combineReducers } from 'redux';
import { counter } from './counter-reducer';
import { movies } from './movies-reducer';

const rootReducer = combineReducers({counter, movies});

export default rootReducer;
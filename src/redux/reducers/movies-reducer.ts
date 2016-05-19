import {Reducer, Action} from 'redux';

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const SUCCESS_MOVIES = 'SUCCESS_MOVIES';
export const FAILURE_MOVIES = 'FAILURE_MOVIES';

const initialState = {
    isLoading: false,
    list: []
}; 


export const movies: Reducer<Object> = (state:Object = initialState, action:Action) : any => {

    switch (action.type) {
        case REQUEST_MOVIES:
            return Object.assign({}, state, {isLoading: true} );

        case SUCCESS_MOVIES:
            return {
                isLoading: false,
                list: [...state["list"], action["response"]]
            };

        case FAILURE_MOVIES:
            return {
                isLoading: false
            };

        default:
            return state;
    }
}
import {LOADED_SESSION, LOAD_SESSION} from './constants'
// The initial state of the App
const initialState = {
    loaded: false,
    error: false,
    list: [],
};

export default function Init(state = initialState, action:any) {
    const {type, payload} = action;
    switch (type) {
        case LOAD_SESSION:
            return {...state};
        case LOADED_SESSION:
            return {
                ...state,
                loaded: payload.loaded,
                list: payload.list
            };
        default:
            return state
    }

}

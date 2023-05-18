import {LOADED_SESSION, LOAD_SESSION} from './constants'
// The initial state of the App
const initialState = {
    loaded: false,
    error: false,
    groupTags: [],
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
                groupTags: payload.groupTags
            };
        default:
            return state
    }

}

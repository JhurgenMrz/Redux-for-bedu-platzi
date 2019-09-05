import {UPDATE,CARGANDO,ERROR} from '../types/postsTypes'

const INITIAL_STATE = {
    posts: [],
    cargando: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case UPDATE:
            return {...state,
                posts: action.payload,
                cargando: false,
                error: ''
            };
        case CARGANDO: 
            return {...state, cargando: true};
        case ERROR: 
            return {...state, error: action.payload, cargando: false};
        default: return state
    }
}
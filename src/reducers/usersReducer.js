import {GET_ALL, CARGANDO,ERROR} from '../types/usersTypes'

const INITIAL_STATE = {
    users: [],
    cargando: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_ALL:
            return { 
                ...state,
                users: action.payload,
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
import {
    UPDATE,
    CARGANDO,
    ERROR,
    COMM_CARGANDO,
    COMM_ERROR,
    COMM_UPDATE
    } from '../types/postsTypes'

const INITIAL_STATE = {
    posts: [],
    cargando: false,
    error: '',
    comm_cargando: false,
    comm_error: ''
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
        case COMM_CARGANDO: 
            return {...state, comm_cargando: true};
        case COMM_ERROR: 
            return {...state, comm_error: action.payload, comm_cargando: false};
        case COMM_UPDATE:
            return {...state,
                posts: action.payload,
                comm_cargando: false,
                comm_error: ''
            };
        default: return state
    }
}
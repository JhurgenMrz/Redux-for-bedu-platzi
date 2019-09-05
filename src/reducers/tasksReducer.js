import {GET_ALL_TASKS, CARGANDO,ERROR} from '../types/tasksTypes'

const INITIAL_STATE = {
    tasks: {},
    cargando: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_ALL_TASKS:
            return { 
                ...state,
                tasks: action.payload,
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
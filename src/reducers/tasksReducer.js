import {
    GET_ALL_TASKS, 
    CARGANDO,
    ERROR,
    ADDED_TASK,
    UPDATE_INPUTS
    } from '../types/tasksTypes'

const INITIAL_STATE = {
    tasks: {},
    cargando: false,
    error: '',
    user_Id:'',
    title:''
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
        case UPDATE_INPUTS:
            return action.payload
        case ADDED_TASK:
            return {...state, tasks:{}, cargando: false, error: ''}
        
            default: return state
    }
}
import axios from 'axios';
import {
    GET_ALL_TASKS, 
    CARGANDO,
    ERROR,
    UPDATE_INPUTS,
    ADDED_TASK
    } from '../types/tasksTypes'

export const getAllTasks = ()=> async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
        
        const tasks = {};
        data.map((task)=>(
            tasks[task.userId] = {
                ...tasks[task.userId],
                [task.id]:{
                    ...task
                }
            }
        ))
        
        dispatch({
        type: GET_ALL_TASKS,
        payload: tasks
    })
    } catch(error){
        console.log('Error:', error.message);
        dispatch({
            type: ERROR,
            payload: 'Información de Tareas no disponible'
        })
    }
}
export const changeInput = (name, value)=>(dispatch,getState)=>{

    const reducer = getState().tasksReducer;

    const reducer_updated = {
        ...reducer,
        [name]: value
    }

    dispatch({
        type: UPDATE_INPUTS,
        payload: reducer_updated
    })
}

export const saveTask = (newTask)=> async (dispatch)=>{
    dispatch({
        type: CARGANDO,
    }) 

    try{
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTask);
        console.log(response.data);
        dispatch({
            type: ADDED_TASK,

        })
    }catch(err){
        console.log(err.message);
        dispatch({
            type: ERROR,
            payload: 'Intente más tarde :D'
        })
    }
    
}
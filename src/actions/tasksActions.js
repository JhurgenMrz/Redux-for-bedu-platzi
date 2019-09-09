import axios from 'axios';
import {
    GET_ALL_TASKS, 
    CARGANDO,
    ERROR,
    UPDATE_INPUTS,
    SAVE,
    UPDATE,
    CLEAR
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
        dispatch({
            type: SAVE,

        })
    }catch(err){
        console.log(err.message);
        dispatch({
            type: ERROR,
            payload: 'Intente más tarde :D'
        })
    }
    
}

export const edit = (taskEdited)=> async (dispatch)=>{
    dispatch({
        type: CARGANDO,
    }) 

    try{
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${taskEdited.id}`, taskEdited);
        dispatch({
            type: SAVE,
        })
    }catch(err){
        console.log(err.message);
        dispatch({
            type: ERROR,
            payload: 'Intente más tarde :D'
        })
    }
}

export const changeCheck = (userId, task_id) => (dispatch, getState)=>{
    const {tasks} =  getState().tasksReducer;
    const selected =  tasks[userId][task_id]
    
    const updated = {
        ...tasks
    };
    updated[userId]={
        ...tasks[userId]
    }
    updated[userId][task_id] = {
        ...tasks[userId][task_id],
        completed: !selected.completed
    };

    dispatch({
        type: UPDATE,
        payload: updated
    })
}

export const deleteTask = (task_id) => async (dispatch) =>{
    dispatch({
        type: CARGANDO
    })

    try{
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${task_id}`)
        dispatch({
            type: GET_ALL_TASKS,
            payload: {}
        })
    }catch(error){
        console.log(error.message);
        dispatch({
            type:ERROR,
            payload: 'Servicio no disponible'
        })
    }
}

export const clearForm = ()=>(dispatch)=>{
    dispatch({
        type: CLEAR,
    })
}
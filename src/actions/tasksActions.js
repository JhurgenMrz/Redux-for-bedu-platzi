import axios from 'axios';
import {GET_ALL_TASKS, CARGANDO,ERROR} from '../types/tasksTypes'

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
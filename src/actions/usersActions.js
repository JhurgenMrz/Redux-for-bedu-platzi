import axios from 'axios';
import {GET_ALL, CARGANDO,ERROR} from '../types/usersTypes'

export const getAll = ()=> async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
        type: GET_ALL,
        payload: data
    })
    } catch(error){
        console.log('Error:', error.message);
        dispatch({
            type: ERROR,
            payload: 'Información de Usuario no disponible'
        })
    }
}
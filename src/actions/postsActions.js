import axios from 'axios';
import {GET_ALL,CARGANDO,ERROR} from '../types/postsTypes'

export const getAllPosts = () =>  async (dispatch)=>{
    dispatch({
        type: CARGANDO
    })
    try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
        type: GET_ALL,
        payload: data
    })
    }catch(error){
        console.log('Error:', error.message);
        dispatch({
            type: ERROR,
            payload: 'Algo salio mal, intente más tarde'
        })
    }
}
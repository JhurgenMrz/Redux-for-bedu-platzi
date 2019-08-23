import axios from 'axios';
import {GET_BY_USER,CARGANDO,ERROR} from '../types/postsTypes'

export const getById =(key) => async (dispatch,getState)=> {
    const {users} = getState().usersReducer;
    const {posts} = getState().postsReducer;

    const user_id = users[(key-1)].id
    const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    
    const posts_Upteted = [
        ...posts,
        respuesta.data
    ]

    dispatch({
        type: GET_BY_USER,
        payload: posts_Upteted
    })
}